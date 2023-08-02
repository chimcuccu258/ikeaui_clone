import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../database/database';

const ProductCard = props => {
  const data = props.data;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(data.screen, {data: data})}
      activeOpacity={0.5}
      style={{marginLeft: 10, marginRight: 10}}>
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
        <Icon name="arrow-right" style={{fontSize: 20, marginTop: 10}} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
