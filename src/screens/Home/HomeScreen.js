import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { PeopleContext } from '../../contexts/PeopleContext';
import { ShowContent } from '../../components/ShowContent/ShowContent';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from './style';

export const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [isIndicator, setIsIndicator] = useState(false);
    const { people } = useContext(PeopleContext);
    const { colors } = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setIsIndicator(true);
        }, 1000);
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.icon}>
                    <Ionicon name={'menu-outline'} size={35} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Notification')}>
                    <Ionicon name={'notifications'} size={25} style={[styles.icon, styles.iconNotifications]} />
                </TouchableOpacity>
            </View>
            {isIndicator ? <View style={styles.bottom}>
                <FlatList
                    data={people}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ShowContent item={item} />}
                />
            </View> : <ActivityIndicator size={'large'} />}
        </View>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.shape({
        openDrawer: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired
    }).isRequired
}