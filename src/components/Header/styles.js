import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 60px 0 20px 0;

  h1 {
    color: #ff9696;
    font-weight: bold;
  }

  a {
    color: #b3b3b3;
    font-weight: 300;
    text-decoration: none;
  }
`;
