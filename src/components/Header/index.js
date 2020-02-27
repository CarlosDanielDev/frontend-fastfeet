import React from 'react';

import { Container, Content, ItemLink, Profile } from './styles';
import logoPequena from '~/assets/images/logo-pequena.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPequena} alt="fastfeet" />
          <ul>
            <li>
              <ItemLink activeStyle={{ color: '#444444' }} to="/deliveries">
                ENCOMENDAS
              </ItemLink>
            </li>
            <li>
              <ItemLink activeStyle={{ color: '#444444' }} to="/couriers">
                ENTREGADORES
              </ItemLink>
            </li>
            <li>
              <ItemLink activeStyle={{ color: '#444444' }} to="/recipients">
                DESTINATÁRIOS
              </ItemLink>
            </li>
            <li>
              <ItemLink activeStyle={{ color: '#444444' }} to="/problems">
                PROBLEMAS
              </ItemLink>
            </li>
          </ul>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Carlos Daniel</strong>
              <button type="button">sair do sistema</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
