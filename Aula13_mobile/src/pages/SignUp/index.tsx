/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-types */
import React, {useCallback, useRef} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, BackToSignIn, BackToSignInText} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  date_birth: Date;
  telephone: string;
  address: string;
  start_year: number;
  user_type: string;
  active: boolean;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const dateBirthInputRef = useRef<TextInput>(null);
  const telephoneInputRef = useRef<TextInput>(null);
  const addressInputRef = useRef<TextInput>(null);
  const startYearInputRef = useRef<TextInput>(null);
  const typeUserInputRef = useRef<TextInput>(null);
  const activeInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('E-mail Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Senha Obrigatória'),
          date_birth: Yup.date().required(
            'Data no Formato xxxx-xx-xx xx:xx:xx',
          ),
          telephone: Yup.string().required('Telefone Obrigatório'),
          address: Yup.string().required('Endereço Obrigatório'),
          start_year: Yup.number().required('Ano de Início Obrigatório'),
          user_type: Yup.string().required('Tipo do Usuário Obrigatório'),
          active: Yup.boolean().required('Tipo do Usuário Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/usuarios', data);

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer login na aplicação!',
        );

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, tente novamente!',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView>
          <BackToSignIn onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#fff" />
            <BackToSignInText>Voltar para login</BackToSignInText>
          </BackToSignIn>
          <Container>
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="Email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                autoCapitalize="none"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => {
                  dateBirthInputRef.current?.focus();
                }}
              />
              <Input
                ref={dateBirthInputRef}
                name="date_birth"
                icon="calendar"
                placeholder="Data de Nascimento"
                returnKeyType="next"
                onSubmitEditing={() => {
                  telephoneInputRef.current?.focus();
                }}
              />
              <Input
                ref={telephoneInputRef}
                autoCapitalize="words"
                name="telephone"
                icon="phone-call"
                placeholder="Telefone"
                returnKeyType="next"
                onSubmitEditing={() => {
                  addressInputRef.current?.focus();
                }}
              />
              <Input
                ref={addressInputRef}
                autoCapitalize="words"
                name="address"
                icon="map"
                placeholder="Endereço Completo"
                returnKeyType="next"
                onSubmitEditing={() => {
                  startYearInputRef.current?.focus();
                }}
              />
              <Input
                ref={startYearInputRef}
                autoCapitalize="words"
                name="start_year"
                icon="log-in"
                placeholder="Ano Inicial"
                returnKeyType="next"
                onSubmitEditing={() => {
                  typeUserInputRef.current?.focus();
                }}
              />
              <Input
                ref={typeUserInputRef}
                autoCapitalize="words"
                name="user_type"
                icon="users"
                placeholder="Tipo de Usuário"
                returnKeyType="next"
                onSubmitEditing={() => {
                  activeInputRef.current?.focus();
                }}
              />
              <Input
                ref={activeInputRef}
                autoCapitalize="words"
                name="active"
                icon="check-square"
                placeholder="Ativo"
                returnKeyType="next"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
