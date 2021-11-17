import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './header/Header';
import { Content } from './content/Content';
import { Footer } from './footer/Footer';
export const RootFile = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Content />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});