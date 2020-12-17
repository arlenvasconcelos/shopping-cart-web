import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 16px;
  background-color: #121212;

  box-shadow: 2px 2px 6px rgb(0,0,0);

  > a {
    background-color: transparent;
    border: 0;
    color: #9466FF;
  }
`;

export const ShoppingCartContent = styled.div`
  position: relative;
  a{
    background-color: transparent;
    border: 0;
    color: #9466FF;
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
