import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../database/database';

const NavComponent = () => {
  return (
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
          <View
            style={{
              backgroundColor: COLORS.red,
              position: 'absolute',
              paddingHorizontal: 5,
              borderRadius: 10,
              right: 15,
              bottom: 15,
            }}>
            <Text style={{color: COLORS.white, fontWeight: '700'}}>1</Text>
          </View>
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
  );
};

export default NavComponent;
