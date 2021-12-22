import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TabNavigation } from './TabNavigation';
import { CustomDrawer } from '../components/CustomDrawer/CustomDrawer';
import { Message } from '../screens/message/Message';
import { Notifications } from '../screens/notifacations/Notifications';
import { Settings } from '../screens/settings/Settings';
import { ThemeContext } from '../contexts/ThemeContext';
const { Navigator, Screen } = createDrawerNavigator();

export const Navigation = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    drawerStyle: {
                        width: '60%',
                        backgroundColor: theme.background
                    },
                    drawerInactiveTintColor: theme.text,
                    drawerActiveTintColor: 'red',
                    headerShown: false,
                    drawerType: 'slide'
                }}
                drawerContent={(props) => <CustomDrawer {...props} />}
            >
                <Screen
                    name={'DrawNavigation'}
                    component={TabNavigation}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ size, color }) => <Ionicon name={'home'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Message'}
                    component={Message}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'mail'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Notification'}
                    component={Notifications}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'notifications'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Settings'}
                    component={Settings}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'settings'} size={size} color={color} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};