import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import { Settings } from '../screens/settings/Settings';
import { Notifications } from '../screens/notifacations/Notifications';

export const Navigation = () => {
    const { Navigator, Screen } = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    drawerStyle: {
                        width: '60%',
                        backgroundColor: 'black',
                    },
                    drawerInactiveTintColor: 'white',
                    headerShown: false
                }}
            >
                <Screen
                    name={'DrawNavigation'}
                    component={TabNavigation}
                    options={{ title: 'Home' }}
                />
                <Screen name={'Notification'} component={Notifications} />
                <Screen name={'Settings'} component={Settings} />
            </Navigator>
        </NavigationContainer>
    );
};