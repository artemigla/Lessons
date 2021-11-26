import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
export const Navigation = () => {
    const { Navigator, Screen } = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name={'Home'} component={HomeScreen} />
                <Screen name={'Profile'} component={ProfileScreen} />
            </Navigator>
        </NavigationContainer>
    );
};