import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LANGUAGES } from '../../constants/translations/Languages'
import { styles } from './styles';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;
    const { theme } = useContext(ThemeContext)
    const setLanguage = code => {
        return i18n.changeLanguage(code);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.row}>
                <Text style={[styles.title, { color: theme.text }]}>Select a Language</Text>
                <Ionicons color={{ color: theme.text }} size={28} name='language-outline' />
            </View>
            {LANGUAGES.map(language => {
                const selectedLanguage = language.code === selectedLanguageCode;
                return (
                    <Pressable
                        key={language.code}
                        style={styles.buttonContainer}
                        disabled={selectedLanguage}
                        onPress={() => setLanguage(language.code)}
                    >
                        <Text
                            style={[selectedLanguage ? styles.selectedText : [styles.text, { color: theme.text }]]}
                        >
                            {language.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};