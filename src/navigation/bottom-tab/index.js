import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigation from '../shop';
import CartStackNavigation from '../cart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
            headerShown: false,
        }}>
            <BottomTabs.Screen
                name='Shop'
                component={ShopStackNavigation} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='home-outline' size={20} />
                    )          
                }}
                    
            />
            <BottomTabs.Screen
                name='Cart'
                component={CartStackNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='cart-outline' size={20} />
                    )
                }} 
                />
        </BottomTabs.Navigator>
    )
}

export default BottomTabsNavigator;