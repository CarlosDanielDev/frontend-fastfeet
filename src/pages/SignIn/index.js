import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/logo.png';
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório.'),
  password: Yup.string()
    .min(6, 'A senha deve ter no minimo 6 carcteres.')
    .required('A senha é obrigatória.'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="fastfeet" />
        <Input type="email" name="email" id="email" placeholder="Seu email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar Conta gratuita</Link>
      </Form>
    </>
  );
}
