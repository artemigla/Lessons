import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { PeopleContext } from '../../components/PeopleContext';
import { styles } from './style';

export const HomeScreen = ({ navigation }) => {

    const [isIndicator, setIsIndicator] = useState(false);
    const { people } = useContext(PeopleContext);

    setTimeout(() => {
        setIsIndicator(true);
    }, 1000);

    return (
        <View style={styles.container}>
            {isIndicator ? <View>
                <View style={styles.title}>
                    <Text style={styles.text}>Main page</Text>
                </View>
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