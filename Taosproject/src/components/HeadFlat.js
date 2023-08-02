import {View, Text} from 'react-native';
import React from 'react';
import ListNav from './ListNav';
import {COLORS} from '../database/database';

const HeadFlat = () => {
  return (
    <View style={{marginRight: 10, marginLeft: 10}}>
      <ListNav />
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
  );
};

export default HeadFlat;
