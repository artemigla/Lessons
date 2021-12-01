import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver'
    },
    mb: {
        marginBottom: 30
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
        marginTop: 10,
        marginLeft: 10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    name: {
        color: 'black',
        fontSize: 17,
        marginTop: 21,
        marginLeft: 10
    }
});