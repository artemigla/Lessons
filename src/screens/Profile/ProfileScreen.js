import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const ProfileScreen = ({ route }) => {
    const { item } = route.params;
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text style={[styles.name, { color: colors.text }]}> {item.name} </Text>
            <Text style={[styles.company, { color: colors.text }]}>{item.company} </Text>
            <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
        </View>
    );
};

ProfileScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.object.isRequired
    }).isRequired
}
