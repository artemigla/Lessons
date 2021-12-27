import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from "./styles";

export const CloseDrawer = () => {
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Home')}>
            <Ionicon style={[styles.icon, { color: theme.text }]} name={'close'} size={30} />
        </TouchableOpacity>
    )
}