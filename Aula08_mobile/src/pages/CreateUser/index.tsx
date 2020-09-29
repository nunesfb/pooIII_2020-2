import React, {useCallback, useRef} from 'react';
import {
  Linking,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';

import {
  Container,
  Title,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={Logo} />
            <View>
              <Title>Cadastrar Usuário</Title>
            </View>
            <Form ref={formRef}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="Email"
                returnKeyType="next"
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                returnKeyType="send"
                name="password"
                icon="lock"
                placeholder="Senha"
              />
            </Form>
            <Button onPress={() => navigation.navigate('SignIn')}>
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="input" size={20} color="#f4ede8" />
        <CreateAccountButtonText>Voltar para o login</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
