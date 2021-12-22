import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';

export const ProfileScreen = ({ route }) => {
    const { item } = route.params;
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text style={[styles.name, { color: theme.text }]}> {item.name} </Text>
            <Text style={[styles.company, { color: theme.text }]}>{item.company} </Text>
            <Text style={[styles.description, { color: theme.text }]}>{item.description}</Text>
        </View>
    );
};

ProfileScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.object.isRequired
    }).isRequired
}
