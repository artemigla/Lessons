import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFriend } from '../../store/actions';
import { styles } from './styles';
export const Friends = ({ navigation }) => {

    const { friend } = useSelector(state => state.Reducer);
    const dispatch = useDispatch();
    const removeFromFriends = (remove) => dispatch(removeFriend(remove));

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleFriends}>Friends</Text>
            </View>
            {friend.length === 0 ? (
                <View style={styles.emptyList}>
                    <Text style={styles.title}>Add a friends to the list.</Text>
                </View>
            )
                :
                <FlatList
                    data={friend}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.wrapper}>
                                <Image style={styles.img} source={{ uri: item.img }} />
                                <View style={styles.info}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                        <Text style={styles.name}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => removeFromFriends(item)}>
                                        <Text style={styles.deleteFriend}>Delete friend</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                />
            }
        </View>
    );
};

Friends.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
}
