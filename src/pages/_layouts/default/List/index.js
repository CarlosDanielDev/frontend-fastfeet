import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

export default function List({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

List.propTypes = {
  children: PropTypes.element.isRequired,
};
