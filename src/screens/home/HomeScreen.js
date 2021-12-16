import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleContext } from '../../contexts/PeopleContext';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { addFriend, removeFriend } from '../../store/actions';
import { styles } from './style';

export const HomeScreen = ({ navigation }) => {

    const [isIndicator, setIsIndicator] = useState(false);
    const { people } = useContext(PeopleContext);
    const dispatch = useDispatch();
    const { friend } = useSelector(state => state.Reducer);

    useEffect(() => {
        setTimeout(() => {
            setIsIndicator(true);
        }, 1000);
    }, []);

    const addToFriends = (friend) => dispatch(addFriend(friend));
    const removeFromFriends = (remove) => dispatch(removeFriend(remove));
    const exists = (changeFriend) => {
        if (friend.filter(item => item.id === changeFriend.id).length > 0) {
            return true;
        }
        return false;
    };
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
                                <View style={styles.info}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                        <Text style={styles.name}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => exists(item) ? removeFromFriends(item) : addToFriends(item)}>
                                        <Text style={styles.addFriend}>Add friend</Text>
                                    </TouchableOpacity>
                                </View>
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