import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles';

const Input = (props) => {
    const [inputState, setInputState] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false
    });
    const INPUT_CHANGE = 'INPUT_CHANGE';
    const INPUT_BLUR = 'INPUT_BLUR';
    const inputReducer = (state, action) => {
        switch (action.type) {
            case INPUT_CHANGE:
                return {
                    ...state,
                    value: action.value,
                    isValid: action.isValid
                }
            case INPUT_BLUR:
                return {
                    ...state,
                    touched: true
                }
            default:
                return state;
        }
    }

    const { onInputChange, id, required, email, min, max, minLenght, errorText } = props;

    useEffect(() => {
        if(inputState.touched) {
            onInputChange(inputState.value, inputState.isValid)
        }
    }, [inputState, onInputChange])

    const handlerOnChange = (text) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;

        if(required && text.trim().lenght === 0) isValid = false;

        if(email && !emailRegex.test(text.toLowerCase())) isValid = false;

        if(min != null && +text < min) isValid = false;

        if(max != null && +text > max) isValid = false;

        if(minLenght != null && text.lenght < minLenght) isValid = false;

        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        })
    }
    const handlerOnBlur = () => dispatch({ type: INPUT_BLUR })

    return (
        <View style={styles.containerForm}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                {...props}
                autoCorrect={false}
                onChangeText={handlerOnChange}
                onBlur={handlerOnBlur}
                value={inputState.value}
            />
            {!inputState.isValid && inputState.touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
            
        </View>
    )
}

export default Input;