import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Enquiry from './src/screens/Enquiry';
import Tour from './src/screens/Tour';
import About from './src/screens/About';
import BookingDetails from './src/screens/BookingDetails';

import Main from './src/Tabbar/Main';
import Navigation from './src/navigation/Navigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <Navigation></Navigation>
    

  );
};
export default App