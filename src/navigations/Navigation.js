import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';

export const Navigation = () => {
    const { Navigator, Screen } = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name={'DrawNavigation'}
                    component={TabNavigation}
                    options={{ headerTitle: '', title: 'Home' }}
                />
            </Navigator>
        </NavigationContainer>
    );
};