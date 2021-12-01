import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { styles } from "./Styles";

export const CloseDrawer = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.closeDrawer()}>
            <Ionicon style={styles.icon} name={'close'} size={30} />
        </TouchableOpacity>
    )
}

CloseDrawer.propTypes = {
    navigation: PropTypes.shape({
        closeDrawer: PropTypes.func.isRequired
    }).isRequired
}