/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}
interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const inputElementRef = useRef<any>(null);
  const {fieldName, defaultValue = '', registerField, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputValueRef.current,
      setValue(ref: any, value) {
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
};
export default Input;
