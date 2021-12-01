import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TabNavigation } from './TabNavigation';
import { UserProfile } from '../screens/user/UserProfile';
import { Message } from '../screens/message/Message';
import { Notifications } from '../screens/notifacations/Notifications';
import { Settings } from '../screens/settings/Settings';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <UserProfile />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

export const Navigation = () => {
    const { Navigator, Screen } = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    drawerStyle: {
                        width: '60%',
                        backgroundColor: 'black',
                    },
                    drawerInactiveTintColor: 'white',
                    headerShown: false
                }}
                drawerContent={(props) => <CustomDrawer {...props} />}
            >
                <Screen
                    name={'DrawNavigation'}
                    component={TabNavigation}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ size, color }) => <Ionicon name={'home'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Message'}
                    component={Message}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'mail'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Notification'}
                    component={Notifications}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'notifications'} size={size} color={color} />
                    }}
                />
                <Screen
                    name={'Settings'}
                    component={Settings}
                    options={{
                        drawerIcon: ({ size, color }) => <Ionicon name={'settings'} size={size} color={color} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};