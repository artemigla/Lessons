import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';

export const Notifications = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <Text style={[{ color: theme.text }]}>Notifications</Text>
            </View>
        </View>
    );
};