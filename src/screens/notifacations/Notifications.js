import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { styles } from './styles';

export const Notifications = () => {
    return (
        <View style={styles.container}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <Text>Notifications</Text>
            </View>
        </View>
    );
};