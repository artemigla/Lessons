import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { HomeNavigation } from './HomeNavigation';
import { Friends } from '../screens/friends/Friends';
import { Message } from '../screens/message/Message';
import { Settings } from '../screens/settings/Settings';
import { Location } from '../screens/location/Location';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabNavigation = () => {

    const { friend } = useSelector(state => state.Reducer);
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
                name={'Friends'}
                component={Friends}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicon name='person-circle' size={size} color={color} />
                    ),
                    tabBarBadge: friend.length ? friend.length : null
                }}
            />
            <Screen
                name={'Message'}
                component={Message}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicon name={'mail'} size={size} color={color} />
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
            <Screen
                name={'Location'}
                component={Location}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicon name={'location'} size={size} color={color} />
                }}
            />
        </Navigator>
    )
};