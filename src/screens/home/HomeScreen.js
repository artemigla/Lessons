import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, ActivityIndicator } from 'react-native';
import { PeopleContext } from '../../components/PeopleContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

export const HomeScreen = ({ navigation }) => {

    const [isIndicator, setIsIndicator] = useState(false);
    const { people } = useContext(PeopleContext);

    setTimeout(() => {
        setIsIndicator(true);
    }, 1000);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={styles.iconMenu}>
                        <Ionicon style={styles.icon} name={'menu-outline'} size={35} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Ionicon name={'notifications'} size={21} style={styles.icon} />
                </TouchableOpacity>
            </View>
            {isIndicator ? <View>
                <FlatList
                    data={people}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.mb}>
                                <View style={styles.wrapper}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                        <Text style={styles.name}>{item.name}</Text>
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