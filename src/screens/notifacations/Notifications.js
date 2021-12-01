import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/returnToHomeScreen/ReturnToHomeScreen';
import PropTypes from 'prop-types';
import { styles } from './Styles';

export const Notifications = (props) => {
    return (
        <View style={styles.container}>
            <ReturnToHomeScreen {...props} />
            <View style={styles.content}>
                <Text>Notifications</Text>
            </View>
        </View>
    );
};

Notifications.propTypes = {
    props: PropTypes.object
}