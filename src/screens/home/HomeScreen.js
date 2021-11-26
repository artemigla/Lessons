import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { ListOfPeople } from '../../components/ListOfPeople';
import { styles } from './style';
export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>Main page</Text>
            </View>
            <FlatList
                data={ListOfPeople}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.wrapper}>
                            <Image style={styles.img} source={{ uri: item.img }} />
                            <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    );
};