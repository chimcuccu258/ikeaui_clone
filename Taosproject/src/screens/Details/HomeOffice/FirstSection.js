import {View, Text, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import React, {useRef} from 'react';
import {COLORS} from '../../../database/database';

const FirstSection = () => {
  const DATA = [
    {
      id: 1,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_2.jpg'),
      width: 200,
      height: 300,
    },
    {
      id: 2,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_3.jpg'),
      width: 150,
      height: 250,
    },
    {
      id: 3,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_4.jpg'),
      width: 300,
      height: 200,
    },
    {
      id: 4,
      image: require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_5.jpg'),
      width: 250,
      height: 400,
    },
  ];

  const flatListRef = useRef();

  // const CardItem = () => {
  //   <TouchableOpacity
  //     activeOpacity={0.5}
  //     data={DATA}
  //     keyExtractor={item => item.id}>
  //     <View>
  //       <Image
  //         style={{
  //           objectFit: 'cover',
  //           width: 100,
  //           height: 100,
  //         }}
  //         source={DATA.image}
  //       />
  //     </View>
  //   </TouchableOpacity>;
  // };

  return (
    <View style={{marginTop: 40}}>
      <Text style={{fontWeight: '700', fontSize: 18}}>
        Working from home: we make it work for you
      </Text>
      <Text style={{fontSize: 14, marginTop: 10, letterSpacing: 0.3}}>
        It is important to have a nice place to work at home. We can make sure
        that you will have everything you need to create a comfortable workspace
        at home. From a good desk to a comfortable office chair and from a handy
        cabinet to the right lighting for the dark days to come.
      </Text>
      <Image
        source={require('../../../database/images/rooms/HomeOffice/FirstSection/FirstSection_1.jpg')}
        style={{width: '100%', height: 400, marginTop: 20}}
      />

      <FlatList
        // ref={flatListRef}
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
  );
};

export default FirstSection;
