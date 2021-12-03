import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { styles } from './styles';

export const Message = () => {
    return (
        <View style={styles.container}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <Text>Message</Text>
            </View>

        </View>
    );
};