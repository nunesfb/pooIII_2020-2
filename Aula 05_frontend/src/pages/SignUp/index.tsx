/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
  FiCalendar,
  FiPhone,
  FiHome,
  FiUserCheck,
  FiUsers,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content, AnimationContainer } from './styles';
import api from '../../services/api';

import { useToast } from '../../hooks/ToastContext';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  date_birth: string;
  telephone: string;
  address: string;
  start_year: number;
  user_type: string;
  active: boolean;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  // console.log(formRef);

  // no Form poderia inserir initialData={{ name: 'Felipe' }}
  const handleSubmit = useCallback(
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
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/usuarios', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
          description: 'Você já pode fazer login no sistema!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no Cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente!',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarberLogo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome"
              maxLength={50}
            />
            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              maxLength={50}
            />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
              maxLength={8}
              minLength={6}
            />
            <Input
              name="date_birth"
              icon={FiCalendar}
              placeholder="Data de Nascimento"
              type="date"
            />
            <Input name="telephone" icon={FiPhone} placeholder="Telefone" />
            <Input
              name="address"
              icon={FiHome}
              placeholder="Endereço Completo"
              maxLength={250}
            />
            <Input
              name="start_year"
              icon={FiUserCheck}
              placeholder="Ano de Início"
              type="number"
            />
            <Input
              name="user_type"
              icon={FiUsers}
              placeholder="Tipo do Usuário"
              maxLength={50}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
