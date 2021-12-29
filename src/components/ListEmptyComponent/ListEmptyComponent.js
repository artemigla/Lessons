import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';

export const ListEmptyComponent = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    return (
        <View style={styles.emptyList}>
            <FontAwesome name='user-friends' color={theme.text} size={70} />
            <Text style={[styles.title, { color: theme.text }]}>{t('translate:addFriend')}</Text>
        </View>
    );
};