import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

export const ListEmptyComponent = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    return (
        <View style={styles.emptyList}>
            <Text style={[styles.title, { color: theme.text }]}>{t('translate:addFriend')}</Text>
        </View>
    );
};