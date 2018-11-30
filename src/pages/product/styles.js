import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Product = styled.div`
  display: flex;
  width: 60%;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  border: 1px solid lightgray;
  margin: 20px 20px 0 0;
  padding: 50px 0 50px 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px 0 0 0;

  h1 {
    font-size: 48px;
  }

  h3 {
    color: #b3b3b3;
    margin-bottom: 50px;
    font-weight: 300;
  }

  span {
    font-size: 40px;
    font-weight: bold;
    color: #37bea9;
    margin-bottom: 15px;
  }

  button {
    font-size: 22px;
    font-weight: bold;
    background: #37bea9;
    border: 0;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    height: 50px;
  }
`;
