import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import HomeOffice from '../screens/Details/HomeOffice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LivingRoom from '../screens/Details/LivingRoom';
import Dining from '../screens/Details/Dining';
import Bedroom from '../screens/Details/Bedroom';
import ChildRoom from '../screens/Details/ChildRoom';
import BathRoom from '../screens/Details/BathRoom';
import Kitchen from '../screens/Details/Kitchen';
import Hallway from '../screens/Details/Hallway';
import LaundryRoom from '../screens/Details/LaundryRoom';
import Outdoor from '../screens/Details/Outdoor';
import StudentRoom from '../screens/Details/StudentRoom';
import TeenRoom from '../screens/Details/TeenRoom';
import Business from '../screens/Details/Business';

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
      <Stack.Screen
        name="Dining"
        component={Dining}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bedroom"
        component={Bedroom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChildRoom"
        component={ChildRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bathroom"
        component={BathRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kitchen"
        component={Kitchen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hallway"
        component={Hallway}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LaundryRoom"
        component={LaundryRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Outdoor"
        component={Outdoor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudentRoom"
        component={StudentRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TeenRoom"
        component={TeenRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Business"
        component={Business}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
