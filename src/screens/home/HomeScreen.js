import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>HomeScreen</Text>
            </TouchableOpacity>
        </View>
    );
};

