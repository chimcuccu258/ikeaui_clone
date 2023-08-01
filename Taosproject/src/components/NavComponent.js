import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../database/database';

const NavComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
      }}
    >
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{ width: 90, height: 36 }}
          source={require('../database/images/Ikea_logo.svg.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
        }}
      >
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
  );
};

export default NavComponent;
