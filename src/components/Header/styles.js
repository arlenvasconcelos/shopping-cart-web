import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 16px;
  background-color: #121212;

  box-shadow: 2px 2px 6px rgb(0,0,0);

  > button {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;

export const ShoppingCartContent = styled.div`
  position: relative;
  button{
    background-color: transparent;
    border: 0;
    color: #fff;
  }

  span{
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #F1B62E;
    font-size: 13px;
    font-weight: bold;
    text-align: center;

  }

`;