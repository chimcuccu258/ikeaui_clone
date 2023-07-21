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
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../database/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView>
      <View
        style={{width: '100%', height: '100%', backgroundColor: COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
        <ScrollView>
          <View
            style={{
              backgroundColor: COLORS.black,
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icon
                name="leaf"
                style={{fontSize: 20, color: COLORS.white, marginRight: 5}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.white,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://www.ikea.com/nl/en/customer-service/services/',
                  )
                }>
                What can we help you with? Check our Services!
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              marginRight: 20,
              marginLeft: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  style={{width: 90, height: 36}}
                  source={require('../database/images/Ikea_logo.svg.png')}
                />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Icon
                    name="user-o"
                    style={{
                      fontSize: 20,
                      marginRight: 25,
                      color: COLORS.blue,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="heart-o"
                    style={{
                      fontSize: 20,
                      marginRight: 25,
                      color: COLORS.blue,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="shopping-cart"
                    style={{
                      fontSize: 20,
                      marginRight: 25,
                      color: COLORS.blue,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="bars"
                    style={{
                      fontSize: 20,
                      color: COLORS.blue,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
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

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="truck" style={{fontSize: 25, marginRight: 5}} />
                <Text style={{fontSize: 14}}>Enter postcode</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="building" style={{fontSize: 20, marginRight: 5}} />
                <Text style={{fontSize: 14}}>Select store</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              backgroundColor: COLORS.grey,
              padding: 0.5,
            }}>

            </View>

            <View
              style={{
                marginTop: 40,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.black,
                  fontWeight: '700',
                  letterSpacing: 1,
                  marginBottom: 10,
                }}>
                Hej! Welcome back
              </Text>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.black,
                    fontWeight: '600',
                    lineSpacing: 1,
                  }}>
                  Product
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
