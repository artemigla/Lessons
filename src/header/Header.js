import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

export const Header = () => {
    const { container, elevation, title } = styles;
    return (
        <View style={[container, elevation]}>
            <Text style={title}>Header</Text>
        </View>
    );
};