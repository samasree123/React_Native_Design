import React from 'react';
import {
    View, Text, Button,
} from 'react-native';

import { createDrawerNavigation } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import About from '../screens/About';

class DrawerNavigation extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text>DrawerNavigation</Text>
            </View>
        );
    
    }
}

const appNavigator = createDrawerNavigator({
    HomeScreen:{
        screen:HomeScreen
    }
})