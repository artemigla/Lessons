import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFriend } from '../../store/user/actions';
import { useTranslation } from 'react-i18next';
import { ListEmptyComponent } from '../../components/ListEmptyComponent/ListEmptyComponent';
import { styles } from './styles';

export const Friends = ({ navigation }) => {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const { friend } = useSelector(state => state.Reducer);
    const dispatch = useDispatch();
    const removeFromFriends = (remove) => dispatch(removeFriend(remove));

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.title}>
                <Text style={[styles.titleFriends, { color: colors.text }]}>{t('translate:friends')}</Text>
            </View>
            <FlatList
                data={friend}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={ListEmptyComponent}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
                            <Image style={styles.img} source={{ uri: item.img }} />
                            <View style={styles.info}>
                                <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                    <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeFromFriends(item)}>
                                    <Text style={styles.deleteFriend}>{t('translate:removeFriend')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

Friends.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
}