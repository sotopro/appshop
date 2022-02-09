import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Validator from '../../utils/Validator';
import Label from '../label/index';


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  helperTextStyle: {
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
  },
  input: {
    opacity: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  message: {
    width: '100%',
  },
  opacity: {
    opacity: 0.5,
  },
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      value: '',
      defaultValue: '',
      validate: false,
    };
  }

  ofRef = (ref) => {
    this.input = ref;
    this.props.textInputRef && this.props.textInputRef(ref);
  };
  blurInput = () => {
    this.props.onBlur && this.props.onBlur();
  };
  focusInput = () => {
    this.props.onFocusInput && this.props.onFocusInput();
  };
  onChangeInput = (value) => {
    const {type} = this.props;
    if (type) {
      if (value.trim() !== '') {
        if (Validator(type, value).error !== '') {
          this.state.value = value;
          this.state.error = Validator(type, value).error;
          this.state.validate = false;
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

  render() {
    const {
      editable,
      children,
      value,
      onChange,
      textInputStyle,
      onFocusInput,
      maxLength,
      placeholder,
      placeholderTextColor,
      ...props
    } = this.props;
    return (
      <View
        pointerEvents={editable ? 'none' : 'auto'}
        styles={editable ? styles.opacity : styles.input}>
        <Label {...this.props}>
          <TextInput
            {...props}
            ref={this.ofRef}
            value={this.state.value}
            onChangeText={this.onChangeInput}
            onBlur={this.blurInput}
            editable={!editable}
            onFocus={this.focusInput}
            style={[textInputStyle || styles.input, styles.container]}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
        </Label>
        {this.state.error !== '' ? (
          <View style={styles.message}>
            <Text style={styles.helperTextStyle}>{this.state.error}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}