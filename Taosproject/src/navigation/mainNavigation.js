import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import HomeOffice from '../screens/Details/HomeOffice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LivingRoom from '../screens/Details/LivingRoom';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeOffice"
        component={HomeOffice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LivingRoom"
        component={LivingRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
