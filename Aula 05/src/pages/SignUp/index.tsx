/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
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
          date_birth: Yup.string().required(
            'Data no Formato xxxx-xx-xx xx:xx:xx',
          ),
          telephone: Yup.string().required('Telefone Obrigatório'),
          address: Yup.string().required('Endereço Obrigatório'),
          start_year: Yup.number().required('Ano de Início Obrigatório'),
          user_type: Yup.string().required('Tipo do Usuário Obrigatório'),
          active: Yup.boolean().required('Ativo Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.active = true;
        data.start_year = 2019;

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
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />
            <Input
              name="date_birth"
              icon={FiUser}
              placeholder="Data de Nascimento"
            />
            <Input name="telephone" icon={FiUser} placeholder="Telefone" />
            <Input
              name="address"
              icon={FiUser}
              placeholder="Endereço Completo"
            />
            <Input
              name="start_year"
              icon={FiUser}
              placeholder="Ano de Início"
              type="number"
            />
            <Input
              name="user_type"
              icon={FiUser}
              placeholder="Tipo do Usuário"
            />
            <Input name="active" icon={FiUser} placeholder="Ativo" />

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
