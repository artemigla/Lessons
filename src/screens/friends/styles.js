import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'row',
        marginBottom: 8,
        padding: 5,
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
    },
    emptyList: {
        color: '#010101',
        fontSize: 18,
        alignItems: 'center'
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