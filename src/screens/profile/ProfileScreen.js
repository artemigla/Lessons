import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
export const ProfileScreen = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text style={styles.name}> {item.name} </Text>
            <Text style={styles.company}>{item.company} </Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
};

ProfileScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.object.isRequired
    })
}