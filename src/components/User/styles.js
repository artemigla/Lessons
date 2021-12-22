import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
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
        fontWeight: 'bold',
        fontSize: 21
    },
    status: {
        fontWeight: 'bold',
        fontSize: 17
    }
});
export default styles;