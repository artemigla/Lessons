import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import { styles } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Settings = () => {

    const { dark, theme, toggle } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <View style={styles.toggleSwitch}>
                    <Text style={[styles.text, { color: theme.text }]}>Dark mode</Text>
                    <Switch trackColor={{ false: 'white', true: 'skyblue' }}
                        onValueChange={toggle} value={dark} />
                </View>
            </View>
        </View>
    );
};