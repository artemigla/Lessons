import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './Styles';
export const ReturnToHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicon name={'arrow-back'} size={28} style={styles.icon} />
            </TouchableOpacity>

        </View>
    );
};

ReturnToHomeScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    })
}