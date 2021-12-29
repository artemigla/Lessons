import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFriend } from '../../store/friends/actions';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

export const Friends = ({ navigation }) => {

    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    const { friend } = useSelector(state => state.Reducer);
    const dispatch = useDispatch();
    const removeFromFriends = (remove) => dispatch(removeFriend(remove));

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.title}>
                <Text style={[styles.titleFriends, { color: theme.text }]}>{t('translate:friends')}</Text>
            </View>
            {friend.length === 0 ? (
                <View style={styles.emptyList}>
                    <Text style={[styles.title, { color: theme.text }]}>{t('translate:addFriend')}</Text>
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
                                        <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => removeFromFriends(item)}>
                                        <Text style={styles.deleteFriend}>{t('translate:removeFriend')}</Text>
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