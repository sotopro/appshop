import React, { useState,  useRef } from 'react'
import { Text, View, Button, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { signup, signin } from '../../store/actions/auth.action';
import { styles } from './styles'
import Input from '../../components/input';


const Auth = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true);
    const emailInput = useRef();

    const dispatch = useDispatch();
    const  handleAuth= () => {
        if(isLogin) {
            dispatch(signin(email, password))
        } else {
            dispatch(signup(email, password))
        }
    }

    const onchange = (value, type) => {
        if(type === 'email') {
            setEmail(value)
        }

        console.warn({value: emailInput.current.state.value, validate: emailInput.current.state.validate})
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Registro'}</Text>
                <View style={styles.containerForm}>
                    <Input 
                        ref={emailInput}
                        label='Email' 
                        placeholder='Ingresa tu correo'
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        type='email'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeInput={(value) => onchange(value, 'email')}
                        maxLength={60}
                    />
                    {/* <Text style={styles.label}>Email</Text>
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
                    /> */}
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