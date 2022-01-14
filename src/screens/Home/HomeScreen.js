import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { PeopleContext } from '../../contexts/PeopleContext';
import { ShowContent } from '../../components/ShowContent/ShowContent';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './style';

export const HomeScreen = ({ navigation }) => {

    const [isIndicator, setIsIndicator] = useState(false);
    const { people } = useContext(PeopleContext);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setTimeout(() => {
            setIsIndicator(true);
        }, 1000);
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
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