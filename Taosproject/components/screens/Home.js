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
import {COLORS, Items, Rooms, FootContents} from '../database/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [room, setRoom] = useState([]);
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const [isOpenFootContent1, setIsOpenFootContent1] = useState(false);

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

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{marginRight: 10, marginLeft: 10}}>
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
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>
            {data.productName}
          </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            style={{fontSize: 20, marginTop: 10}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const footer = () => {
    return (
      <View
        style={{
          display: 'flex',
          width: '100%',
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              display: 'flex',
              padding: 18,
              backgroundColor: COLORS.grey,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={scrollToTop}>
            <Text style={{fontWeight: 600}}>Back to top</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              padding: 20,
            }}>
            <Text style={{fontWeight: 600}}>Share</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: COLORS.grey,
          }}>
          <View style={{marginLeft: 20, marginRight: 20, marginTop: 50}}>
            <Text style={{fontWeight: 700, fontSize: 22}}>
              Join IKEA family
            </Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 14,
                color: COLORS.darkGrey,
                fontWeight: 400,
              }}>
              Bring your ideas to life with special discounts, inspiration, and
              lots of good things in store. It's all free.
            </Text>
            <TouchableOpacity activeOpacity={0.5} style={{marginTop: 15}}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: COLORS.darkGrey,
                }}>
                See more
              </Text>
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: 20,
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  padding: 15,
                  backgroundColor: COLORS.blue,
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    fontWeight: 700,
                    color: COLORS.white,
                  }}>
                  Join or log in
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 50}}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  paddingBottom: 20,
                }}
                onPress={() => {
                  setIsOpenFootContent1(!isOpenFootContent1);
                  const newValue = rotateValue._value == 0 ? 1 : 0;
                  Animated.timing(rotateValue, {
                    toValue: newValue,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                }}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  Customer service
                </Text>
                <Animated.View
                  style={{
                    transform: [
                      {
                        rotate: rotateValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '90deg'],
                        }),
                      },
                    ],
                  }}>
                  <Icon name="chevron-down" style={{fontSize: 16}} />
                </Animated.View>
              </TouchableOpacity>
              {isOpenFootContent1 ? (
                <View style={{paddingBottom: 20}}>
                  {FootContents.map((item, index) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={{fontSize: 15, paddingBottom: 10}}
                        key={index}>
                        <Text>{item.content}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : null}

              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  paddingBottom: 20,
                }}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  About IKEA
                </Text>
                <Icon name="chevron-down" style={{fontSize: 16}} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  paddingBottom: 20,
                }}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  Shopping at IKEA
                </Text>
                <Icon name="chevron-down" style={{fontSize: 16}} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  paddingBottom: 20,
                }}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  IKEA Family & Business
                </Text>
                <Icon name="chevron-down" style={{fontSize: 16}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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

        <Animated.View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
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

        <Animated.View
          style={{
            marginRight: 10,
            marginLeft: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
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
        </Animated.View>

        <FlatList
          ref={scrollViewRef}
          data={room}
          renderItem={({item}) => <ProductCard data={item} key={item.id} />}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}
          style={{
            marginTop: 10,
          }}
          ListHeaderComponent={
            <View style={{marginRight: 10, marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 30,
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
                  <Icon
                    name="building"
                    style={{fontSize: 20, marginRight: 5}}
                  />
                  <Text style={{fontSize: 14}}>Select store</Text>
                </TouchableOpacity>
              </View>

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
          ListFooterComponent={footer}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
