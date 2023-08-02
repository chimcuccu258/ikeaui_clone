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
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {COLORS} from '../../database/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import NavComponent from '../../components/NavComponent';
import SearchComponent from '../../components/SearchComponent';
import TopCarousel from '../../components/TopCarousel';

const HomeOffice = ({route}) => {
  const {data} = route.params;

  console.log(data);

  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
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

  const scrollToTop = () => {
    scrollViewRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  let AnimatedHeaderValue = useRef(new Animated.Value(0)).current;
  const Header_Max_Height = 50;
  const Header_Min_Height = 0;

  const animateHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const scrollViewRef = useRef(null);

  const ReturnHome = ({data}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Home', {data: data})}>
        <Text>Rooms</Text>
      </TouchableOpacity>
    );
  };

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
          style={{marginRight: 10, marginLeft: 10, marginTop: 20}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}
          ListHeaderComponent={() => {
            return (
              <>
                <ReturnHome />
                <TopCarousel data={data} />
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeOffice;
