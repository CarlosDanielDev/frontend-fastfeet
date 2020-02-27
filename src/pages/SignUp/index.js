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
  password: Yup.string().required('A senha é obrigatória.'),
  name: Yup.string()
    .min(3, 'O nome deve ter no mínimo 3 caracteres')
    .required('O nome é obrigatório.'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="fastfeet" />
        <Input type="name" name="name" id="name" placeholder="Seu nome" />
        <Input type="email" name="email" id="email" placeholder="Seu email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho uma conta!</Link>
      </Form>
    </>
  );
}
