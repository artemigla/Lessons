import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 8,
        padding: 5,
        backgroundColor: '#4682B4'
    },
    name: {
        color: 'black',
        fontSize: 17,
        marginTop: 5,
    },
    img: {
        height: 80,
        width: 80,
    },
    title: {
        marginTop: 10,
        alignItems: 'center'
    },
    titleFriends: {
        fontSize: 21,
        color: 'black',
    },
    emptyList: {
        color: '#010101',
        fontSize: 18
    },
    info: {
        flexDirection: 'column',
        marginLeft: 10
    },
    deleteFriend: {
        color: '#00FFFF',
        fontSize: 15
    }
});