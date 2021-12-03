import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { PeopleContext } from '../../contexts/PeopleContext';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { styles } from './style';

export const HomeScreen = ({ navigation }) => {

    const [isIndicator, setIsIndicator] = useState(false);
    const { people } = useContext(PeopleContext);

    useEffect(() => {
        setTimeout(() => {
            setIsIndicator(true);
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
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
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.wrapper}>
                                <Image style={styles.img} source={{ uri: item.img }} />
                                <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                    <Text style={styles.name}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
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