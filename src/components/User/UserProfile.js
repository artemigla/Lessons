import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Caption } from 'react-native-paper';
import logo from '../../assets/Logo.png';
import styles from './styles';

export const UserProfile = () => {

    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Image style={[styles.logo, { borderColor: colors.border }]} source={logo} />
            <Text style={[styles.text, { color: colors.text }]}>Nick Name</Text>
            <Caption style={[styles.status, { color: colors.text }]}>Status</Caption>
        </View>
    );
};