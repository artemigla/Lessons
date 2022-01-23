import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../constants/translations/Languages'
import { styles } from './styles';

export const LanguageSelector = () => {

    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;
    const { colors } = useTheme();
    const setLanguage = code => {
        return i18n.changeLanguage(code);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.row}>
                <Text style={[styles.title, { color: colors.text }]}>Select a Language</Text>
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
                            style={[selectedLanguage ? styles.selectedText : [styles.text, { color: colors.text }]]}
                        >
                            {language.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};