import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend, removeFriend } from '../../store/actions';
import { styles } from './styles';

export const ShowContent = ({ item }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { friend } = useSelector(state => state.Reducer);
    const addToFriends = (friend) => dispatch(addFriend(friend));
    const removeFromFriends = (remove) => dispatch(removeFriend(remove));
    const exists = (changeFriend) => {
        if (friend.filter(item => item.id === changeFriend.id).length > 0) {
            return true;
        }
        return false;
    };

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
};

ShowContent.propTypes = {
    item: PropTypes.object.isRequired
}