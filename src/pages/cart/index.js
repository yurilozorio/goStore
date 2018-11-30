import React from 'react';

import {
  Container, Product, ProductList, ProductItem,
} from './styles';

const cart = () => (
  <Container>
    <Product>
      <ProductList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>VALOR</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>

        <tbody>
          <ProductItem>
            <td>
              <img
                src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg"
                alt="Camiseta"
              />
            </td>
            <td id="product">
              <div>
                <span>Camiseta Trok</span>
                <small>Element</small>
              </div>
            </td>
            <td id="valor">R$50,00</td>
            <td>
              <input type="text" value="3" />
            </td>
            <td id="valor">R$150,00</td>
            <td>X</td>
          </ProductItem>
          <ProductItem>
            <td>
              <img
                src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg"
                alt="Camiseta"
              />
            </td>
            <td>
              <div>
                <span>Camiseta Trok</span>
                <small>Element</small>
              </div>
            </td>
            <td id="valor">R$50,00</td>
            <td>
              <input type="text" value="3" />
            </td>
            <td id="valor">R$150,00</td>
            <td>X</td>
          </ProductItem>
        </tbody>
      </ProductList>
      <div id="total">
        <span id="labelTotal">TOTAL</span>
        <span id="valorTotal">R$300,00</span>
      </div>
    </Product>
  </Container>
);

export default cart;
