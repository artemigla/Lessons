import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, ActivityIndicator } from 'react-native';
import { PeopleContext } from '../../components/PeopleContext';
import { SafeAreaView } from 'react-native-safe-area-context';
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
                <FlatList
                    data={people}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ScrollView>
                                <View style={styles.wrapper}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { item })}>
                                        <Text style={styles.name}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        );
                    }}
                />
            </View> : <ActivityIndicator size={'large'} />}
        </View>
    );
};