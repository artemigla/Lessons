import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/returnToHomeScreen/ReturnToHomeScreen';
import PropTypes from 'prop-types';
import { styles } from './Styles';

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
