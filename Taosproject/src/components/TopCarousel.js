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
      category: 'carousel',
      title: 'Desks & computer desks',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 2,
      category: 'carousel',
      title: 'Desk chairs',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 3,
      category: 'carousel',
      title: 'Storage units & cabinets',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 4,
      category: 'carousel',
      title: 'Drawer units',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 5,
      category: 'carousel',
      title: 'Paper & media organisers',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 6,
      category: 'carousel',
      title: 'Work lamps',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 7,
      category: 'carousel',
      title: 'Paper & media boxes',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 8,
      category: 'carousel',
      title: 'Bookcases',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 9,
      category: 'carousel',
      title: 'Lighting',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 10,
      category: 'carousel',
      title: 'Curtains',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
    },
    {
      id: 11,
      category: 'carousel',
      title: 'Acoustic panels',
      image: require('../database/images/rooms/HomeOffice/TopCarousel/HomeCarousel_1.jpg'),
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
          }}
        />
      </View>
    </View>
  );
};

export default TopCarousel;
