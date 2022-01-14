import React, { useContext } from 'react';
import { PeopleContext } from '../contexts/PeopleContext';
import { ListOfPeople } from '../constants/ListOfPeople';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { ThemeContext } from '../contexts/ThemeContext';

const { Navigator, Screen } = createNativeStackNavigator();

export const HomeNavigation = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <PeopleContext.Provider value={{ people: ListOfPeople }}>
            <Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.background
                    },
                    headerTintColor: theme.text,
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