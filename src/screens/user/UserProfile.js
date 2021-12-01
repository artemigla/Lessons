import React from 'react';
import { View, Text, Image } from 'react-native';
import { Caption } from 'react-native-paper';
import logo from '../../assets/Logo.png';
import { styles } from './Styles';
export const UserProfile = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.text}>Nick Name</Text>
            <Caption style={styles.status}>Status</Caption>
        </View>
    );
};