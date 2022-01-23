import React from 'react';
import { PeopleContext } from '../contexts/PeopleContext';
import { useTheme } from '@react-navigation/native';
import { ListOfPeople } from '../constants/ListOfPeople';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const HomeNavigation = () => {
    const { colors } = useTheme();
    return (
        <PeopleContext.Provider value={{ people: ListOfPeople }}>
            <Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.background
                    },
                    headerTintColor: colors.text,
                    headerTitleAlign: 'center'
                }}
            >
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