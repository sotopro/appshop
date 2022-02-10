import React, { useReducer, useEffect, Component } from 'react';
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles';
import Label from '../label/index';
import Validator from '../../utils/validator';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            value: '',
            defaultValue: '',
            validate: false
        };
    }

    ofRef = (ref) => {
        this.input = ref;
        this.props.textInputRef && this.props.textInputRef(ref);
    }

    onChangeInput = (value) => {
        const { type } = this.props;
        if (type) {
            if(value.trim() !== '') {
                if(Validator(type, value).error !== '') {
                    this.state.value = value;
                    this.state.error = Validator(type, value).error;
                    this.state.validate = false
                } else {
                    this.state.value = value;
                    this.state.error = '';
                    this.state.validate = true; 
                }
            } else {
                this.state.value = value;
                this.state.error = '';
                this.state.validate = false;
            }
        }
        this.props.onChangeInput && this.props.onChangeInput(value);
    };

    onFocusInput = () => {
        this.props.onFocusInput && this.props.onFocusInput();
    }

    onBlurInput = () => {
        this.props.onBlurInput && this.props.onBlurInput();
    }

    render() {
        const {
            editable,
            ...props
        } = this.props;
        return (
            <View 
                pointerEvents={editable ? 'none' : 'auto'}
                style={editable ? styles.opacity : styles.container}
            >
                <Label {...props} />
                <TextInput 
                    {...props}
                    style={styles.input}
                    ref={this.ofRef}
                    onChangeText={this.onChangeInput}
                    onFocus={this.onFocusInput}
                    onBlur={this.onBlurInput}
                    editable={editable}
                />
                {this.state.error !== '' ? (
                    <Text style={styles.messageText}>{this.state.error}</Text>
                ): null}
            </View>
        )
    }
}