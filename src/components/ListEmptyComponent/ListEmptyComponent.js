import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';

export const ListEmptyComponent = () => {
    const { colors } = useTheme();
    const { t } = useTranslation();
    return (
        <View style={styles.emptyList}>
            <FontAwesome name='user-friends' color={colors.text} size={70} />
            <Text style={[styles.title, { color: colors.text }]}>{t('translate:addFriend')}</Text>
        </View>
    );
};