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
  const flatListRef = useRef();

  const CarouselData = [
    {
      id: 1,
      category: 'carousel',
      title: 'Desks & computer desks',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_1.jpg'),
    },
    {
      id: 2,
      category: 'carousel',
      title: 'Desk chairs',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_2.jpg'),
    },
    {
      id: 3,
      category: 'carousel',
      title: 'Storage units & cabinets',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_3.jpg'),
    },
    {
      id: 4,
      category: 'carousel',
      title: 'Drawer units',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_4.jpg'),
    },
    {
      id: 5,
      category: 'carousel',
      title: 'Paper & media organisers',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_5.jpg'),
    },
    {
      id: 6,
      category: 'carousel',
      title: 'Work lamps',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_6.jpg'),
    },
    {
      id: 7,
      category: 'carousel',
      title: 'Paper & media boxes',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_7.jpg'),
    },
    {
      id: 8,
      category: 'carousel',
      title: 'Bookcases',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_8.jpg'),
    },
    {
      id: 9,
      category: 'carousel',
      title: 'Lighting',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_9.jpg'),
    },
    {
      id: 10,
      category: 'carousel',
      title: 'Curtains',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_10.jpg'),
    },
    {
      id: 11,
      category: 'carousel',
      title: 'Acoustic panels',
      image: require('../../database/images/rooms/HomeOffice/HomeCarousel_11.jpg'),
    },
  ];

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
                source={require('../../database/images/Ikea_logo.svg.png')}
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
          style={{marginRight: 10, marginLeft: 10, marginTop: 20}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}
          ListHeaderComponent={<ReturnHome />}
          ListFooterComponent={
            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 30, fontWeight: '700'}}>
                {data.productName}
              </Text>
              <View style={{marginTop: 10}}>
                <FlatList
                  ref={flatListRef}
                  data={CarouselData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        showsVerticalScrollIndicator={false}
                        style={{marginRight: 20}}>
                        <View
                          style={{
                            borderRadius: 10,
                            display: 'flex',
                            overflow: 'hidden',
                          }}>
                          <View
                            style={{
                              overflow: 'hidden',
                              width: '100%',
                            }}>
                            <Image
                              style={{
                                objectFit: 'cover',
                                borderRadius: 10,
                                width: 180,
                                height: 100,
                              }}
                              source={item.image}
                            />
                          </View>
                          <Text style={{marginTop: 10}}>{item.title}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeOffice;
