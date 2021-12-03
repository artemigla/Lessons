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
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        borderWidth: 3,
        borderRadius: 10,
        padding: 3,
        backgroundColor: '#4682B4'
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 3
    },
    name: {
        color: 'black',
        fontSize: 17,
        marginTop: 21,
        marginLeft: 10
    },
    bottom: {
        flex: 1
    }
});