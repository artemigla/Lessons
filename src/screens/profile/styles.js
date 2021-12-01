import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 30,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 100,
        alignItems: 'center'
    },
    description: {
        color: 'black',
        fontSize: 17,
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