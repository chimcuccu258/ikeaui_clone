import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  Linking,
  FlatList,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {COLORS, Items, Rooms, FootContents} from '../database/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../components/ProductCard';
import FooterComponent from '../components/FooterComponent';
import SearchComponent from '../components/SearchComponent';
import NavComponent from '../components/NavComponent';
import ListNav from '../components/ListNav';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [room, setRoom] = useState([]);
  const [rotateFooterContentA, setRotationFooterContentA] = useState(
    new Animated.Value(0),
  );
  const [rotateFooterContentB, setRotationFooterContentB] = useState(
    new Animated.Value(0),
  );
  const [rotateFooterContentC, setRotationFooterContentC] = useState(
    new Animated.Value(0),
  );
  const [rotateFooterContentD, setRotationFooterContentD] = useState(
    new Animated.Value(0),
  );
  const [isOpenFooterContentA, setIsOpenFooterContentA] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let roomList = [];
    for (let index = 0; index < Rooms.length; index++) {
      if (Rooms[index].category == 'rooms') {
        roomList.push(Rooms[index]);
      }
    }
    setRoom(roomList);
  };

  let AnimatedHeaderValue = useRef(new Animated.Value(0)).current;
  const Header_Max_Height = 50;
  const Header_Min_Height = 0;
  const navigation = useNavigation();

  const animateHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const scrollViewRef = useRef(null);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{width: '100%', height: '100%', backgroundColor: COLORS.white}}>
        <Animated.View
          style={{
            backgroundColor: COLORS.black,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: animateHeight,
          }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon
              name="leaf"
              style={{fontSize: 20, color: COLORS.white, marginRight: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
              }}
              onPress={() =>
                Linking.openURL(
                  'https://www.ikea.com/nl/en/customer-service/services/',
                )
              }>
              What can we help you with? Check our Services!
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <NavComponent />
        <SearchComponent />

        <FlatList
          ref={scrollViewRef}
          data={room}
          pagingEnabled
          renderItem={({item, index}) => (
            <ProductCard data={item} key={item.id} />
          )}
          keyExtractor={item => item.id}
          scrollEventThrottle={10}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}
          style={{
            marginTop: 10,
          }}
          ListHeaderComponent={
            <View style={{marginRight: 10, marginLeft: 10}}>
              <ListNav />
              <Text
                style={{
                  fontSize: 26,
                  color: COLORS.blue,
                  fontWeight: '700',
                  letterSpacing: 1,
                  marginBottom: 10,
                }}>
                Hej! Welcome back
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: COLORS.black,
                  fontWeight: '700',
                  marginBottom: 20,
                }}>
                All rooms
              </Text>
            </View>
          }
          ListFooterComponent={<FooterComponent />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;