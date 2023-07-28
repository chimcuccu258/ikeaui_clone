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

const HomeOffice = () => {
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

        <View
          ref={scrollViewRef}
          style={{marginRight: 10, marginLeft: 10, marginTop: 20}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          <View>
            <ReturnHome />
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 30,}}>Home Office</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeOffice;
