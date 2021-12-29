import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../contexts/ThemeContext';
import { useSelector } from 'react-redux';
import { HomeNavigation } from './HomeNavigation';
import { Friends } from '../screens/friends/Friends';
import { Message } from '../screens/message/Message';
import { SettingsNavigation } from './SettingsNavigation';
import { Location } from '../screens/location/Location';
import { useTranslation } from 'react-i18next';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabNavigation = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    const { friend } = useSelector(state => state.Reducer);
    return (
        <Navigator
            initialRouteName={'Home'}
            screenOptions={() => ({
                tabBarActiveTintColor: 'red',
                tabBarStyle: { backgroundColor: theme.background }
            })}


        >
            <Screen
                name={'Home'}
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicon name={'home'} size={size} color={color} />
                    ),
                    title: t('translate:mainPage')
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
                    tabBarBadge: friend.length ? friend.length : null,
                    title: t('translate:friends')
                }}
            />
            <Screen
                name={'Message'}
                component={Message}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicon name={'mail'} size={size} color={color} />,
                    title: t('translate:message')
                }}
            />
            <Screen
                name={'SettingsNavigation'}
                component={SettingsNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicon name='settings' size={size} color={color} />
                    ),
                    title: t('translate:settings')
                }} />
            <Screen
                name={'Location'}
                component={Location}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicon name={'location'} size={size} color={color} />,
                    title: t('translate:location')
                }}
            />
        </Navigator>
    )
};