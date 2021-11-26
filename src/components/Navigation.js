import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { Settings } from '../screens/settings/Settings';
export const Navigation = () => {
    const { Navigator, Screen } = createNativeStackNavigator();
    const BottomTab = createBottomTabNavigator();

    const Home = () => {
        return (
            <Navigator>
                <Screen
                    name={'HomeScreen'}
                    component={HomeScreen}
                    options={{ headerShown: false }} />
                <Screen
                    name={'Profile'}
                    component={ProfileScreen}
                    options={{ headerTitleAlign: 'center' }} />
            </Navigator>
        );
    };

    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name={'Home'}
                    component={Home}
                    options={{ headerShown: false }} />
                <BottomTab.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{ headerShown: false }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
};