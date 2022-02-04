import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color: '#333',
        fontSize: 16,
        marginBottom: 15,
    },
    error: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'red',
    }
});