import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const ListNav = () => {
  return (
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
        <Icon name="building" style={{fontSize: 20, marginRight: 5}} />
        <Text style={{fontSize: 14}}>Select store</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListNav;