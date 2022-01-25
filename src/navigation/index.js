import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigation from './shop';
import CartStackNavigation from './cart';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <BottomTabs.Navigator initialRouteName='Shop'>
                <BottomTabs.Screen name='Shop' component={ShopStackNavigation} />
                <BottomTabs.Screen name='Cart' component={CartStackNavigation} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;