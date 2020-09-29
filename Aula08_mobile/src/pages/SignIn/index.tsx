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
  ForgotPassword,
  ForgotPasswordText,
  WhatsApp,
  Mail,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

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
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
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
            <Button onPress={() => navigation.navigate('Home')}>Entrar</Button>

            <ForgotPassword
              onPress={() => {
                Alert.alert('Contate o Administrador!');
              }}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('CreateUser')}>
        <Icon name="input" size={20} color="#f4ede8" />
        <CreateAccountButtonText>Criar uma Conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
