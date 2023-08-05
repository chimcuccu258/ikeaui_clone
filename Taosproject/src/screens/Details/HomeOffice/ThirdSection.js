import {View, Text, FlatList, Touchable, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS } from '../../../database/database';

const DATA = [
  {
    id: 1,
    description: 'BEKANT system – Flexible desk combinations and organizers with a sleek design',
    image: require('../../../database/images/rooms/HomeOffice/ThirdSection/ThirdSection.js1.jpg'),
  },
  {
    id: 2,
    description: 'TROTTEN system – Concentrate and collaborate with flexible and adaptable office furniture',
    image: require('../../../database/images/rooms/HomeOffice/ThirdSection/ThirdSection.js2.jpg'),
  },
  {
    id: 3,
    description: 'HEMNES home workplace series – Traditional furniture that lasts, made of solid wood',
    image: require('../../../database/images/rooms/HomeOffice/ThirdSection/ThirdSection.js3.jpg'),
  },
  {
    id: 4,
    description: 'UPPSPEL series – Ergonomic and space-saving furniture, storage and accessories',
    image: require('../../../database/images/rooms/HomeOffice/ThirdSection/ThirdSection.js4.jpg'),
  },
  {
    id: 5,
    description: 'LÅNGFJÄLL series – Adjustable office chairs, designed for comfort with a stylish design',
    image: require('../../../database/images/rooms/HomeOffice/ThirdSection/ThirdSection.js5.jpg'),
  },
  {
    id: 6,
    description: 'IDÅSEN system – Office organizers and adjustable desks with stylish details,made of coated steel',
    image: require('../../../database/images/rooms/HomeOffice/ThirdSection/ThirdSection.js6.jpg'),
  }
];

const ThirdSection = () => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 20}}>
        Furniture and storage for a well-organized home office
      </Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={item.image}
                  style={{
                    objectFit: 'cover',
                    width: 400,
                    height: 200,
                    marginBottom: 10,
                  }}
                />
              </TouchableOpacity>
              <View style={{marginBottom: 30,}}>
                <Text style={{fontSize: 14, fontWeight: '300',}}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ThirdSection;
