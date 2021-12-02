import React from 'react';
import { PeopleContext } from '../contexts/PeopleContext';
import { ListOfPeople } from '../constants/ListOfPeople';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const HomeNavigation = () => {
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