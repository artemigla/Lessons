import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { styles } from './styles';

export const Notifications = () => {

    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <Text style={[{ color: colors.text }]}>Notifications</Text>
            </View>
        </View>
    );
};