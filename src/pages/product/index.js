import React from 'react';

import {
  Container, Product, Image, Details,
} from './styles';

const product = () => (
  <Container>
    <Product>
      <Image>
        <img
          src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg"
          alt="Camiseta"
        />
      </Image>
      <Details>
        <h1>Camiseta Trok</h1>
        <h3>Element</h3>
        <span>R$50,00</span>
        <button type="button">ADICIONAR AO CARRINHO</button>
      </Details>
    </Product>
  </Container>
);

export default product;
