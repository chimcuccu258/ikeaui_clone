import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FootContents} from '../database/database';

const FooterComponent = ({scrollToTop}) => {
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

  const toggleFooterContent = animatedValue => {
    const newValue = animatedValue._value === 0 ? 1 : 0;
    Animated.timing(animatedValue, {
      toValue: newValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const scrollViewRef = useRef(null);

  const DATA = [
    {
      id: 1,
      title: 'Customer Service',
      category: 'customerService',
    },
    {
      id: 2,
      title: 'My orders',
      category: 'customerService',
    },
    {
      id: 3,
      title: 'Returns & claims',
      category: 'customerService',
    },
    {
      id: 4,
      title: 'Delivery',
      category: 'customerService',
    },
    {
      id: 5,
      title: 'Stock information',
      category: 'customerService',
    },
    {
      id: 6,
      title: 'Services',
      category: 'customerService',
    },
    {
      id: 7,
      title: 'Recalls',
      category: 'customerService',
    },
    {
      id: 8,
      title: 'Personal advice',
      category: 'customerService',
    },
    {
      id: 9,
      title: 'This is IKEA',
      category: 'about',
    },
    {
      id: 10,
      title: 'IKEA Concepts',
      category: 'about',
    },
    {
      id: 11,
      title: 'Sustainability',
      category: 'about',
    },
    {
      id: 12,
      title: 'Ideas & inspiration',
      category: 'about',
    },
    {
      id: 13,
      title: 'Catalogue & brochures',
      category: 'about',
    },
    {
      id: 14,
      title: 'Campaigns',
      category: 'about',
    },
    {
      id: 15,
      title: 'Working at IKEA',
      category: 'about',
    },
    {
      id: 16,
      title: 'Press',
      category: 'about',
    },
    {
      id: 17,
      title: 'IKEA news',
      category: 'about',
    },
  ];

  const flatListRef = useRef();

  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
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
          <Text style={{fontWeight: 700, fontSize: 22}}>Join IKEA family</Text>
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
                toggleFooterContent(rotateFooterContentA);
              }}>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                Customer service
              </Text>
              <Animated.View
                style={{
                  transform: [
                    {
                      rotate: rotateFooterContentA.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '-90deg'],
                      }),
                    },
                  ],
                }}>
                <Icon name="chevron-left" style={{fontSize: 16}} />
              </Animated.View>
            </TouchableOpacity>

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
                toggleFooterContent(rotateFooterContentB);
              }}>
              <Text style={{fontSize: 18, fontWeight: '700'}}>About IKEA</Text>
              <Animated.View
                style={{
                  transform: [
                    {
                      rotate: rotateFooterContentB.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '-90deg'],
                      }),
                    },
                  ],
                }}>
                <Icon name="chevron-left" style={{fontSize: 16}} />
              </Animated.View>
            </TouchableOpacity>
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
                toggleFooterContent(rotateFooterContentC);
              }}>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                Shopping at IKEA
              </Text>
              <Animated.View
                style={{
                  transform: [
                    {
                      rotate: rotateFooterContentC.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '-90deg'],
                      }),
                    },
                  ],
                }}>
                <Icon name="chevron-left" style={{fontSize: 16}} />
              </Animated.View>
            </TouchableOpacity>
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
                toggleFooterContent(rotateFooterContentD);
              }}>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                IKEA Family & Business
              </Text>
              <Animated.View
                style={{
                  transform: [
                    {
                      rotate: rotateFooterContentD.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '-90deg'],
                      }),
                    },
                  ],
                }}>
                <Icon name="chevron-left" style={{fontSize: 16}} />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FooterComponent;
