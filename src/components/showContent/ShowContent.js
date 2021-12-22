import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

    const switchFriendStatus = (changeFriend) => {
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
                <TouchableOpacity
                    style={styles.addFriend}
                    onPress={() => switchFriendStatus(item) ? removeFromFriends(item) : addToFriends(item)}>
                    <Ionicons
                        name={switchFriendStatus(item) ? 'checkmark-sharp' : 'person-add'}
                        color={switchFriendStatus(item) ? '#32CD32' : '#000000'}
                        size={21}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

ShowContent.propTypes = {
    item: PropTypes.object.isRequired
}