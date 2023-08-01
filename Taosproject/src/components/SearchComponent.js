import React from 'react';
import {View, TextInput, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../database/database';

const SearchComponent = ({searchQuery, setSearchQuery}) => {
  return (
    <Animated.View
      style={{
        marginRight: 10,
        marginLeft: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon
          name="search"
          style={{
            fontSize: 20,
            position: 'absolute',
            left: 25,
            top: 10,
            zIndex: 1,
          }}
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            backgroundColor: 'rgb(245, 245, 245)',
            borderRadius: 50,
            paddingHorizontal: 60,
          }}
          placeholder="What are you looking for?"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </Animated.View>
  );
};

export default SearchComponent;