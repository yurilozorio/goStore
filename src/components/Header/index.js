import React from 'react';

import { Container, Banner } from './styles';

const Header = () => (
  <Container>
    <Banner>
      <h1>GoCommerce</h1>
      <a href="/">Meu Carrinho</a>
    </Banner>
  </Container>
);

export default Header;
