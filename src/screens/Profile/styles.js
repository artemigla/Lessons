import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 100,
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 3,
        margin: 30,
    },
    description: {
        color: 'black',
        fontSize: 17,
        margin: 30,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 21
    },
    company: {
        fontSize: 21,
        color: 'skyblue',
        fontWeight: 'bold'
    }
});