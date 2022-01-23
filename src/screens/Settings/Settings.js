import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ReturnToHomeScreen } from '../../components/ReturnToHomeScreen/ReturnToHomeScreen';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { toggleTheme } from '../../store/themes/actions';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

export const SettingsScreen = ({ navigation }) => {

    const { theme } = useSelector(state => state.ThemeReducer);
    const dispatch = useDispatch();
    const { colors, dark } = useTheme();
    const { t } = useTranslation();

    const switchTheme = () => {
        if (theme === 'light') {
            dispatch(toggleTheme('dark'))
        } else {
            dispatch(toggleTheme('light'))
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ReturnToHomeScreen />
            <View style={styles.content}>
                <View style={styles.toggleSwitch}>
                    <Text style={[styles.text, { color: colors.text }]}>{dark ? 'Dark' : 'Light'} theme</Text>
                    <Switch onValueChange={switchTheme} value={dark} />
                </View>
                <View style={[styles.languageText]}>
                    <Text style={[styles.text, { color: colors.text }]}>{t('translate:chooseLanguage')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LanguageSelector')}>
                        <Ionicons style={{ color: colors.text }} name='chevron-forward' size={26} color={'black'} />
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