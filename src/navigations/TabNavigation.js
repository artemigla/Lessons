import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation } from './HomeNavigation';
import { Settings } from '../screens/settings/Settings';
import Ionicon from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <Navigator
            initialRouteName={'Home'}
            screenOptions={() => ({
                tabBarActiveTintColor: 'red'
            })}
        >
            <Screen
                name={'Home'}
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicon name={'home'} size={size} color={color} />
                    )
                }}
            />
            <Screen
                name={'Settings'}
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicon name='settings' size={size} color={color} />
                    )
                }} />
        </Navigator>
    )
};