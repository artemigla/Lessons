import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer = () => {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});