import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Caption } from 'react-native-paper';
import logo from '../../assets/Logo.png';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles';

export const UserProfile = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Image style={styles.logo} source={logo} />
            <Text style={[styles.text, { color: theme.text }]}>Nick Name</Text>
            <Caption style={[styles.status, { color: theme.text }]}>Status</Caption>
        </View>
    );
};