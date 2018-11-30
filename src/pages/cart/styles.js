import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-end;

  #total {
    display: flex;
    margin-top: 40px;
    padding-right: 50px;
    align-items: center;

    #labelTotal {
      font-size: 18px;
      color: #b3b3b3;
      font-weight: bolder;
      text-transform: uppercase;
      margin-right: 15px;
    }

    #valorTotal {
      width: 13%;
      font-size: 32px;
      font-weight: bolder;
      color: #37bea9;
    }
  }
`;

export const ProductList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;

  thead th {
    font-size: 18px;
    color: #b3b3b3;
    font-weight: bolder;
    text-transform: uppercase;
    padding: 0px;
  }
`;

export const ProductItem = styled.tr`
  td {
    line-height: 40px;
    border-bottom: 1px solid #ddd;
  }

  &:last-child td {
    border-bottom: 0px;
  }

  img {
    margin-top: 20px;
    width: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.5;
    }

    small {
      color: #b3b3b3;
      line-height: 1.5;
    }
  }

  input {
    width: 40px;
    height: 25px;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    color: #b3b3b3;
  }

  #product {
    width: 56%;
  }

  #valor {
    width: 13%;
    font-size: 26px;
    font-weight: bolder;
    color: #37bea9;
  }
`;
