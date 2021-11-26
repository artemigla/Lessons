import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { Settings } from '../screens/settings/Settings';
import { PeopleContext } from './PeopleContext';
import { ListOfPeople } from './ListOfPeople';
export const Navigation = () => {
    const { Navigator, Screen } = createNativeStackNavigator();
    const BottomTab = createBottomTabNavigator();

    const Home = () => {
        return (
            <PeopleContext.Provider value={{ people: ListOfPeople }}>
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
            </PeopleContext.Provider>
        );
    };

    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName={'Home'}>
                <BottomTab.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicon name='home' size={size} color={color} />
                        )
                    }} />
                <BottomTab.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicon name='settings' size={size} color={color} />
                        )
                    }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
};