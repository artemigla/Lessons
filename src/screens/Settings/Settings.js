import React, { useContext } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export const SettingsScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const { dark, theme, toggle } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <View style={styles.toggleSwitch}>
                    <Text style={[styles.text, { color: theme.text }]}>Dark mode</Text>
                    <Switch trackColor={dark ? styles.switchEnableBorder : styles.switchDisableBorder}
                        onValueChange={toggle} value={dark} />
                </View>
                <View style={[styles.languageText]}>
                    <Text style={[styles.text, { color: theme.text }]}>{t('translate:chooseLanguage')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LanguageSelector')}>
                        <Ionicons style={{ color: theme.text }} name='chevron-forward' size={26} color={'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

SettingsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
}