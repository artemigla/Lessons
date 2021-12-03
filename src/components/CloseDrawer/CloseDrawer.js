import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";

export const CloseDrawer = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Home')}>
            <Ionicon style={styles.icon} name={'close'} size={30} />
        </TouchableOpacity>
    )
}