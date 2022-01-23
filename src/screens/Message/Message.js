import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';

export const Message = () => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <Text style={[{ color: colors.text }]}>Message</Text>
            </View>

        </View>
    );
};