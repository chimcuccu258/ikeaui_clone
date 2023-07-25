import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Linking,
  Keyboard,
  FlatList,
  Animated,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {COLORS, Items, Rooms} from '../database/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [room, setRoom] = useState([]);

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

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            width: '100%',
            height: 250,
            marginBottom: 10,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={data.productImage}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
          />
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 18, fontWeight: 700}}>
            {data.productName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  let AnimatedHeaderValue = useRef(new Animated.Value(0)).current;
  const Header_Max_Height = 50;
  const Header_Min_Height = 0;

  const animateHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{width: '100%', height: '100%', backgroundColor: COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

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

        <Animated.View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{width: 90, height: 36}}
                source={require('../database/images/Ikea_logo.svg.png')}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="user-o"
                  style={{
                    fontSize: 22,
                    marginRight: 25,
                    color: COLORS.blue,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="heart-o"
                  style={{
                    fontSize: 22,
                    marginRight: 25,
                    color: COLORS.blue,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="shopping-cart"
                  style={{
                    fontSize: 24,
                    marginRight: 25,
                    color: COLORS.blue,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="bars"
                  style={{
                    fontSize: 22,
                    color: COLORS.blue,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          <View
            style={{
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Icon
                name="search"
                style={{
                  fontSize: 20,
                  position: 'absolute',
                  left: 25,
                  top: 10,
                  zIndex: 1,
                }}
              />
              <TextInput
                style={{
                  flex: 1,
                  height: 40,
                  backgroundColor: 'rgb(245, 245, 245)',
                  borderRadius: 50,
                  paddingHorizontal: 60,
                }}
                placeholder="What are you looking for?"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                activeOpacity={0.5}>
                <Icon name="truck" style={{fontSize: 25, marginRight: 5}} />
                <Text style={{fontSize: 14}}>Enter postcode</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                activeOpacity={0.5}>
                <Icon name="building" style={{fontSize: 20, marginRight: 5}} />
                <Text style={{fontSize: 14}}>Select store</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: COLORS.grey,
                padding: 0.5,
              }}></View>

            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 26,
                  color: COLORS.black,
                  fontWeight: '700',
                  letterSpacing: 1,
                  marginBottom: 10,
                }}>
                Hej! Welcome back
              </Text>
            </View>
            <View>
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
            <View>
              {/* {room.map(item => {
                return <ProductCard data={item} key={item.id} />;
              })} */}
              <FlatList
                data={room}
                renderItem={({item}) => {
                  return <ProductCard data={item} key={item.id} />;
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
