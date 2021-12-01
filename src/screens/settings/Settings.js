import React from 'react';
import { View, Text } from 'react-native';
import { ReturnToHomeScreen } from '../../components/returnToHomeScreen/ReturnToHomeScreen';
import PropTypes from 'prop-types';
import { styles } from './styles';
export const Settings = (props) => {
    return (
        <View style={styles.container}>
            <ReturnToHomeScreen {...props} />
            <View style={styles.content}>
                <Text>The settings for choosing the language, changing the theme will be placed here ...</Text>
            </View>
        </View>
    );
};

Settings.propTypes = {
    props: PropTypes.object
}