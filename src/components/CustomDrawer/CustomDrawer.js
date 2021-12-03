import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CloseDrawer } from '../CloseDrawer/CloseDrawer';
import { UserProfile } from '../User/UserProfile';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <CloseDrawer />
            <UserProfile />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

CustomDrawer.propTypes = {
    props: PropTypes.object
}