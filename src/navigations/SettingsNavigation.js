import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageSelector } from '../components/LanguageSelector/LanguageSelector';
import { SettingsScreen } from '../screens/settings/Settings';

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsNavigation = () => {
    const { theme } = useContext(ThemeContext);
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
                        backgroundColor: theme.background
                    },
                    headerTintColor: theme.text
                }}
            />
        </Navigator>
    );
};