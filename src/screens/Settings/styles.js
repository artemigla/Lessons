import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1
    },
    toggleSwitch: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 10,
        color: 'white'
    },
    switchEnableBorder: {
        borderColor: '#6fa6d3',
        borderWidth: 1
    },

    switchDisableBorder: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
    },
    languageText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    }
});