import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  margin: 20px 10px 0 10px;
  padding: 20px 40px 20px 40px;

  img {
    width: 150px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 18px;
  }

  small {
    color: #b3b3b3;
    margin-bottom: 10px;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    color: #37bea9;
  }
`;
