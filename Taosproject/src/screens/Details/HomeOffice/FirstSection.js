import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import React, {useRef} from 'react';
import {COLORS} from '../../../database/database';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductCard from '../../../components/ProductCard';
import ProductCarousel from './ProductCarousel';

const FirstSection = () => {
  const DATA = [
    {
      id: 1,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_2.jpg'),
    },
    {
      id: 2,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_3.jpg'),
    },
    {
      id: 3,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_4.jpg'),
    },
    {
      id: 4,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_5.jpg'),
    },
  ];

  return (
    <View style={{marginTop: 40}}>
      <View>
        <Text style={{fontWeight: '700', fontSize: 18}}>
          Working from home: we make it work for you
        </Text>
        <Text style={{fontSize: 14, marginTop: 10, lineHeight: 20}}>
          It is important to have a nice place to work at home. We can make sure
          that you will have everything you need to create a comfortable
          workspace at home. From a good desk to a comfortable office chair and
          from a handy cabinet to the right lighting for the dark days to come.
        </Text>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_1.jpg')}
            style={{width: '100%', height: 400, marginTop: 20, zIndex: 0}}
          />
        </TouchableOpacity>
        <FlatList
          data={DATA}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity activeOpacity={0.5} style={{marginTop: 10}}>
                <View
                  style={{
                    display: 'flex',
                  }}>
                  <Image
                    style={{
                      objectFit: 'cover',
                      width: Dimensions.get('window').width / 2 - 10,
                      height: 200,
                      marginRight: 10,
                    }}
                    source={item.image}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <ProductCarousel />
      </View>
    </View>
  );
};

export default FirstSection;
