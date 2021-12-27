import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#444',
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginTop: 5
    },
    text: {
        fontSize: 12,
        color: '#000',
    },
    selectedText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'tomato',
    }
});