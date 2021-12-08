import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BookingDetails from '../screens/BookingDetails';
import Register from '../screens/Register';
import Main from '../Tabbar/Main';
import TourOperators from '../screens/TourOperators';
import CarRental from '../screens/CarRental';
import Event from '../screens/Event';
import Hotel from '../screens/Hotel';
import Train from '../screens/Train';
import Flight from '../screens/Flight';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Main}
            options ={
              {
                headerShown: false
                
              }
            }
           
          />
          <Stack.Screen
            name="BookingDetails"
            component={BookingDetails}
           
          />
          <Stack.Screen
            name="Register"
            component={Register}
           
          />
           <Stack.Screen
            name="TourOperators"
            component={TourOperators}
           
          />
           <Stack.Screen
            name="CarRental"
            component={CarRental}
           
          />
          <Stack.Screen
            name="Event"
            component={Event}
           
          />
           <Stack.Screen
            name="Hotel"
            component={Hotel}
           
          />
           <Stack.Screen
            name="Train"
            component={Train}
           
          />
          <Stack.Screen
            name="Flight"
            component={Flight}
           
          />
          
          
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  };
  export default Navigation