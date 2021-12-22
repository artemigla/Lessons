import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';

export const Location = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[{ color: theme.text }]}>Location</Text>
        </View>
    );
};
