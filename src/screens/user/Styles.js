import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 3,
        resizeMode: 'cover',
        marginBottom: 10
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 21
    },
    status: {
        fontWeight: 'bold',
        fontSize: 17
    }
});