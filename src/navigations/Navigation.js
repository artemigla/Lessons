import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { TabNavigation } from './TabNavigation';
import { CustomDrawer } from '../components/CustomDrawer/CustomDrawer';
import { Message } from '../screens/Message/Message';
import { Notifications } from '../screens/Notifacations/Notifications';
import { SettingsNavigation } from './SettingsNavigation';
import { useTranslation } from 'react-i18next';
const { Navigator, Screen } = createDrawerNavigator();

export const Navigation = () => {
    const { colors } = useTheme();
    const { theme } = useSelector(state => state.ThemeReducer);
    const { t } = useTranslation();
    return (
        <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
            <Navigator
                screenOptions={{
                    drawerStyle: {
                        width: '60%',
                        backgroundColor: colors.background
                    },
                    drawerInactiveTintColor: colors.primary,
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
                        title: t('translate:mainPage'),
                        drawerIcon: ({ size, color }) => <Ionicon name={'home'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Message'}
                    component={Message}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'mail'} size={size} color={color} />,
                        title: t('translate:message')
                    }}
                />
                <Screen
                    name={'Notification'}
                    component={Notifications}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'notifications'} size={size} color={color} />,
                        title: t('translate:notification')
                    }}
                />
                <Screen
                    name={'SettingsNavigation'}
                    component={SettingsNavigation}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'settings'} size={size} color={color} />,
                        title: t('translate:settings')
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};