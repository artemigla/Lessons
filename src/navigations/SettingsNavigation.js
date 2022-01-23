import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { LanguageSelector } from '../components/LanguageSelector/LanguageSelector';
import { SettingsScreen } from '../screens/Settings/Settings';

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsNavigation = () => {
    const { colors } = useTheme();
    return (
        <Navigator>
            <Screen
                name='Settings'
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name='LanguageSelector'
                component={LanguageSelector}
                options={{
                    headerStyle: {
                        backgroundColor: colors.background
                    },
                    headerTintColor: colors.text
                }}
            />
        </Navigator>
    );
};