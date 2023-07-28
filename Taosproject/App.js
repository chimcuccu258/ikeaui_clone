import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import ProductInfo from './src/screens/ProductInfo';
import MainNavigation from './src/navigation/mainNavigation';

// import Cart from './src/screens/Cart';
// import ProductInfo from './src/screens/ProductInfo';
// import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
