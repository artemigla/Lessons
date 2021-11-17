import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        fontSize: 30,
        color: 'yellow',
        padding: 26,
        marginLeft: '37%'
    },
    input: {
        margin: 5,
        padding: 3,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '70%',
        fontSize: 17
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5
    },
    button: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        marginLeft: 3,
    },
    disabledButton: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        marginLeft: 3,
    },
    textButton: {
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold'
    },
    info: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '10%',
    },
    text: {
        fontSize: 26,
        color: 'black',
        fontFamily: 'Cochin',
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
});