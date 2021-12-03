import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { styles } from './styles';

export const Settings = () => {
    return (
        <View style={styles.container}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <Text>The settings for choosing the language, changing the theme will be placed here...</Text>
            </View>
        </View>
    );
};