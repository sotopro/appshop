import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerCard: {
        height: height / 1.6,
        width: width * 0.7,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
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
    linkText: {
        color: '#2e78b7',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});