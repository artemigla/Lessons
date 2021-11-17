import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
export const Footer = () => {

    const { container, text } = styles;
    return (
        <View style={container}>
            <Text style={text}>Footer</Text>
        </View>
    );
};