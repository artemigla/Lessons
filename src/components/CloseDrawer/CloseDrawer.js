import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";

export const CloseDrawer = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Home')}>
            <Ionicon style={[styles.icon, { color: colors.text }]} name={'close'} size={30} />
        </TouchableOpacity>
    )
}