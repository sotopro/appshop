import React, { useState,  useReducer, useCallback } from 'react'
import { Text, View, Button, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { signup, signin } from '../../store/actions/auth.action';
import { styles } from './styles'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }

        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }

        let formIsValid = true;

        for(const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }

        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }

    return state;
}

const Auth = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true);
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    })
    const dispatch = useDispatch();
    const  handleAuth= () => {
        if(isLogin) {
            dispatch(signin(email, password))
        } else {
            console.warn({email, password})
            dispatch(signup(email, password))
        }
    }

    const handlerInputChange = useCallback((inputIndetifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIndetifier
        });
    }, [formDispatch]);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Registro'}</Text>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.linkText}>{isLogin ? '¿No tienes una cuenta? registrate' : '¿Ya tienes una cuenta?'}</Text>
                </TouchableOpacity>
                <Button title={isLogin ? 'Ingresar' : 'Registrar' } color='#2e78b7' onPress={() => handleAuth()}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;