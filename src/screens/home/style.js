import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver'
    },
    header: {
        height: '9%',
        backgroundColor: '#1E90FF',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        justifyContent: 'center',
        padding: 3
    },
    iconNotifications: {
        marginRight: 7
    },
    title: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    bottom: {
        flex: 1
    },
});