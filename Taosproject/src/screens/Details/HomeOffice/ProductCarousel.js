import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {COLORS} from '../../../database/database';

const DATA = [
  {
    id: 1,
    name: 'MICKE',
    description: 'Desk, 105x50 cm',
    price: '€ 89,95',
    image: require('../../../database/images/rooms/HomeOffice/ProductCarousel/ProductCarousel_1.jpg'),
  },
  {
    id: 2,
    name: 'GLADHÖJDEN ',
    description: 'Desk sit/stand, 100x60cm',
    price: '€ 199',
    image: require('../../../database/images/rooms/HomeOffice/ProductCarousel/ProductCarousel_2.jpg'),
  },
  {
    id: 3,
    name: 'RIDSPÖ ',
    description: 'Desk, 140x70cm',
    price: '€ 399',
    image: require('../../../database/images/rooms/HomeOffice/ProductCarousel/ProductCarousel_3.jpg'),
  },
  {
    id: 4,
    name: 'RENBERGET',
    description: 'Swivel chair',
    price: '€ 65,66',
    image: require('../../../database/images/rooms/HomeOffice/ProductCarousel/ProductCarousel_4.jpg'),
  },
  {
    id: 5,
    name: 'TERTIAL',
    description: 'Work lamp',
    price: '€ 14,99',
    image: require('../../../database/images/rooms/HomeOffice/ProductCarousel/ProductCarousel_5.jpg'),
  },
];

const ProductCarousel = () => {
  const [isPress, setIsPress] = useState(false);
  const addFavorite = () => {
    setIsPress(!isPress);
  };

  return (
    <View style={{marginTop: 50}}>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                showsVerticalScrollIndicator={false}
                style={{marginRight: 10}}>
                <View
                  style={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: '100%',
                    marginRight: 10,
                  }}>
                  <Image
                    style={{
                      objectFit: 'cover',
                      borderRadius: 10,
                      width: 300,
                      height: 300,
                    }}
                    source={item.image}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    {item.description}
                  </Text>
                  <Text style={{fontSize: 14, fontWeight: '600'}}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={{marginTop: 10, marginLeft: 10}}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      padding: 10,
                      backgroundColor: COLORS.blue,
                      borderRadius: 50,
                    }}>
                    <MaterialCommunityIcons
                      name="basket-plus-outline"
                      size={26}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 5}}>
                    <MaterialCommunityIcons
                      name={isPress ? 'heart' : 'heart-outline'}
                      size={26}
                      color={COLORS.black}
                      onPress={addFavorite}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductCarousel;
