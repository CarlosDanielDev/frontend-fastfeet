import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function HeaderPage({ children }) {
  return (
    <Container>
      <>{children}</>
    </Container>
  );
}

HeaderPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
