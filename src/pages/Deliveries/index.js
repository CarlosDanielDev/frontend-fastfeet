import React from 'react';
import { FaPlus } from 'react-icons/fa';
import HeaderPage from '~/components/HeaderPage';
import Title from '~/components/Title';
import List from '~/pages/_layouts/default/List';
import { Container } from './styles';

export default function Deliveries() {
  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando encomendas</Title>
        <div>
          <input type="text" placeholder="Buscar por encomendas." />
          <button type="button">
            <FaPlus />
            Cadastrar
          </button>
        </div>
      </HeaderPage>
      <List>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Daniel</td>
              <td>Daniel</td>
              <td>Cidade</td>
              <td>Estado</td>
              <td>Status</td>
              <td>Ações</td>
            </tr>
          </tbody>
        </table>
      </List>
    </Container>
  );
}
