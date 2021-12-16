import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },

    info: {
        flexDirection: 'column',
        marginLeft: 10
    },
    addFriend: {
        color: '#00FFFF',
        fontSize: 15
    }
});
