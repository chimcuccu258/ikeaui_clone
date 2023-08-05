import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../database/database';

const DATA = [
  {
    id: 1,
    title: 'IKEA family price',
    name: 'HATTEFJÄLL',
    description: 'Office chair with armrests',
    image: require('../../../database/images/rooms/HomeOffice/Chairs/Chair_1.jpg'),
  },
  {
    id: 2,
    title: 'IKEA family price',
    name: 'LÅNGFJÄLL',
    description: 'Conference chair',
    image: require('../../../database/images/rooms/HomeOffice/Chairs/Chair_2.jpg'),
  },
];

const FifthSection = () => {
  const [showText, setShowText] = useState(false);

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 10}}>
        Take a seat in the spotlight
      </Text>
      <Text style={{fontSize: 14, lineHeight: 20}}>
        If they catch your eye, you’re not alone. HATTEFJÄLL office chairs and
        LÅNGFJÄLL conference chairs have a way of attracting looks. No wonder
        with that combination of curves and comfort. And don’t get us started on
        back support and ergonomics. The new colours, they must be the best yet?
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
                  style={{width: '100%', height: 500, marginTop: 20}}
                />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  width: 200,
                  left: 150,
                  bottom: 180,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={handleToggleText}
                  style={{
                    padding: 5,
                    backgroundColor: COLORS.white,
                    borderRadius: 50,
                  }} />
                {showText && (
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={{
                        backgroundColor: COLORS.white,
                        padding: 15,
                        top: 10,
                        left: -80,
                        width: 110,
                        flexDirection: 'row',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: COLORS.blue,
                            lineHeight: 15,
                          }}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: COLORS.black,
                            lineHeight: 20,
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: COLORS.black,
                            lineHeight: 20,
                          }}>
                          {item.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FifthSection;
