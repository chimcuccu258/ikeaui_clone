import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {COLORS} from '../database/database';
import {useNavigation} from '@react-navigation/native';

const TopCarousel = props => {
  const data = props.data;
  const navigation = useNavigation();

  const flatListRef = useRef();

  const CarouselData = [
    {
      id: 1,
      category: 'homeOffice',
      title: 'Desks & computer desks',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 2,
      category: 'homeOffice',
      title: 'Desk chairs',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_2.jpg'),
    },
    {
      id: 3,
      category: 'homeOffice',
      title: 'Storage units & cabinets',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_3.jpg'),
    },
    {
      id: 4,
      category: 'homeOffice',
      title: 'Drawer units',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_4.jpg'),
    },
    {
      id: 5,
      category: 'homeOffice',
      title: 'Paper & media organisers',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_5.jpg'),
    },
    {
      id: 6,
      category: 'homeOffice',
      title: 'Work lamps',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_6.jpg'),
    },
    {
      id: 7,
      category: 'homeOffice',
      title: 'Paper & media boxes',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_7.jpg'),
    },
    {
      id: 8,
      category: 'homeOffice',
      title: 'Bookcases',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_8.jpg'),
    },
    {
      id: 9,
      category: 'homeOffice',
      title: 'Lighting',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_9.jpg'),
    },
    {
      id: 10,
      category: 'homeOffice',
      title: 'Curtains',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_10.jpg'),
    },
    {
      id: 11,
      category: 'homeOffice',
      title: 'Acoustic panels',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_11.jpg'),
    },
  ];

  return (
    <View style={{marginTop: 30}}>
      <Text style={{fontSize: 30, fontWeight: '700'}}>{data.productName}</Text>
      <View style={{marginTop: 10}}>
        <FlatList
          ref={flatListRef}
          data={CarouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            if (item.category === 'homeOffice') {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  showsVerticalScrollIndicator={false}
                  style={{marginRight: 20}}>
                  <View
                    style={{
                      borderRadius: 10,
                      display: 'flex',
                      overflow: 'hidden',
                    }}>
                    <View
                      style={{
                        overflow: 'hidden',
                        width: '100%',
                      }}>
                      <Image
                        style={{
                          objectFit: 'cover',
                          borderRadius: 10,
                          width: 180,
                          height: 100,
                        }}
                        source={item.image}
                      />
                    </View>
                    <Text style={{marginTop: 10}}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              );
            } else {
              return null;
            }
          }}
        />
      </View>
    </View>
  );
};

export default TopCarousel;
