import {
  View,
  Text,
  FlatList,
  Touchable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../database/database';

const DATA = [
  {
    id: 1,
    description: 'Create three workspaces in one room',
    image: require('../../../database/images/rooms/HomeOffice/FourthSection/FourthSection_1.jpg'),
    arrowBackgroundColor: COLORS.black,
    arrowColor: COLORS.white,
    fontColor: "#111111",
    color: "#a39ea3",
  },
  {
    id: 2,
    description: 'Your ergonomical home work station',
    image: require('../../../database/images/rooms/HomeOffice/FourthSection/FourthSection_2.jpg'),
    arrowBackgroundColor: COLORS.black,
    arrowColor: COLORS.white,
    fontColor: "#111111",
    color: "#cbc0b1",
  },
  {
    id: 3,
    description: 'A solution for every workspace',
    image: require('../../../database/images/rooms/HomeOffice/FourthSection/FourthSection_3.jpg'),
    arrowBackgroundColor: COLORS.white,
    arrowColor: COLORS.black,
    fontColor: "#ffffff",
    color: "#111111",
  },
  {
    id: 4,
    description: 'Create the perfect gaming setup',
    image: require('../../../database/images/rooms/HomeOffice/FourthSection/FourthSection_4.jpg'),
    arrowBackgroundColor: COLORS.black,
    arrowColor: COLORS.white,
    fontColor: "#111111",
    color: "#7b7a7c",
  },
];

const FourthSection = () => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 20}}>
        Featured Products
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
                <Image
                  source={item.image}
                  style={{width: 300, height: 300,}}
                />
                <View
                  style={{
                    backgroundColor: item.color,
                    marginRight: 20,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      width: 300,
                      height: 200,
                      padding: 30,
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: '700', color: item.fontColor}}>
                      {item.description}
                    </Text>
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
                          marginTop: 20,
                          padding: 15,
                          borderRadius: 50,
                          backgroundColor: item.arrowBackgroundColor,
                        }}>
                        <Icon name="arrow-right" size={26} color={item.arrowColor} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FourthSection;
