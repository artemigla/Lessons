import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const Message = (props) => {
    return (
        <View style={styles.container}>
            <ReturnToHomeScreen {...props} />
            <View style={styles.content}>
                <Text>Message</Text>
            </View>

        </View>
    );
};

Message.propTypes = {
    props: PropTypes.object
}