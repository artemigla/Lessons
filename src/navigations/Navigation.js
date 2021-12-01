import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TabNavigation } from './TabNavigation';
import { Settings } from '../screens/settings/Settings';
import { Notifications } from '../screens/notifacations/Notifications';
import { UserProfile } from '../screens/user/UserProfile';

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
                    options={{ title: 'Home' }}
                />
                <Screen name={'Notification'} component={Notifications} />
                <Screen name={'Settings'} component={Settings} />
            </Navigator>
        </NavigationContainer>
    );
};