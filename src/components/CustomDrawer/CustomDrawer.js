import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CloseDrawer } from '../CloseDrawer/CloseDrawer';
import { UserProfile } from '../User/UserProfile';
import { styles } from './styles';
export const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <CloseDrawer {...props} />
            <UserProfile />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}