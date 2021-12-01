import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { HomeNavigation } from './HomeNavigation';
import { Message } from '../screens/message/Message';
import { Settings } from '../screens/settings/Settings';
import { Location } from '../screens/location/Location';

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
                name={'Message'}
                component={Message}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ size, color }) => <Ionicon name={'mail'} size={size} color={color} />
                }}
            />
            <Screen
                name={'Settings'}
                component={Settings}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicon name='settings' size={size} color={color} />
                    )
                }} />
            <Screen
                name={'Location'}
                component={Location}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ size, color }) => <Ionicon name={'navigate'} size={size} color={color} />
                }}
            />
        </Navigator>
    )
};