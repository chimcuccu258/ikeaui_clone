import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../database/database';

const DATA = [
  {
    id: 1,
    name: 'Organized gaming room',
    image: require('../../../database/images/rooms/HomeOffice/SecondSection/SecondSection_1.jpg'),
  },
  {
    id: 2,
    name: 'Harmonious workspace',
    image: require('../../../database/images/rooms/HomeOffice/SecondSection/SecondSection_2.jpg'),
  },
  {
    id: 3,
    name: 'Turquoise working station',
    image: require('../../../database/images/rooms/HomeOffice/SecondSection/SecondSection_3.jpg'),
  },
  {
    id: 4,
    name: 'Inspiring studio',
    image: require('../../../database/images/rooms/HomeOffice/SecondSection/SecondSection_4.jpg'),
  },
  {
    id: 5,
    name: 'Home workplace for the creative',
    image: require('../../../database/images/rooms/HomeOffice/SecondSection/SecondSection_5.jpg'),
  },
];

const SecondSection = () => {
  return (
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 20}}>
        Featured Workplaces
      </Text>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={{position: 'relative', alignContent: 'center',}}>
                  <Image
                    source={item.image}
                    style={{
                      width: 200,
                      height: 300,
                      resizeMode: 'cover',
                      marginRight: 20,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      width: 200,
                      bottom: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={{
                        padding: 10,
                        backgroundColor: COLORS.white,
                        borderRadius: 50,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          color: COLORS.black,
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SecondSection;
