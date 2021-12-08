import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import About from '../screens/About';
import Enquiry from '../screens/Enquiry';
import Tour from '../screens/Tour';
import Login from '../screens/Login';
import Services from '../screens/Services';
const Tab = createBottomTabNavigator();
const Main = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home';
                } else if (route.name === 'About') {
                    iconName = focused ? 'ios-people' : 'ios-people';
                }

                if (route.name === 'Enquiry') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                if (route.name === 'Tour') {
                    iconName = focused
                        ? 'ios-bus-outline'
                        : 'ios-bus-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                if (route.name === 'Services') {
                    iconName = focused
                        ? 'ios-disc'
                        : 'ios-disc';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                if (route.name === 'Login') {
                    iconName = focused
                        ? 'ios-person'
                        : 'ios-person';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }



                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
        })
        }
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='About' component={About} />
            <Tab.Screen name='Enquiry' component={Enquiry} />
            <Tab.Screen name='Tour' component={Tour} />
            <Tab.Screen name='Services' component={Services} />
            <Tab.Screen name='Login' component={Login} />



        </Tab.Navigator>


    );
}
export default Main;