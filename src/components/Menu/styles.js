import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const MenuBar = styled.div`
  display: flex;
  width: 60%;
  height: 50px;
  background: #ff9696;
  border-radius: 5px;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    height: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-left: 20px;
  }
`;
