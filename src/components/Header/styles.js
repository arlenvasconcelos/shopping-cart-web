import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 16px 24px;
  background-color: #121212;

  box-shadow: 2px 2px 6px rgb(0,0,0);

  > div > a {
    background-color: transparent;
    border: 0;
    color: #9466FF;
  }

  > span{
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const ShoppingCartContent = styled.div`
  position: relative;
  > a{
    background-color: transparent;
    border: 0;
    color: #9466FF;
  }

  > span{
    position: absolute;
    top: -3px;
    right: -3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #F1B62E;
    font-size: 13px;
    font-weight: bold;
    text-align: center;

  }

  &:hover{
    > div{
      display: block;

    }
  }

`;

export const ShoppingCartModal = styled.div`
  display: none;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  position: absolute;
  top: 40px;
  right: 0;
  width: 250px;
  font-size: 15px;
  padding: 8px;

  > div{
    /* position: relative; */
    width: 100%;
    display: flex;
    justify-content: space-between;

    &:first-child{
      font-weight: bold;
      font-size: 16px;

      justify-content: start;
      text-align: center;

      margin-bottom: 16px;
      padding-bottom: 8px;

      border-bottom: 1px solid #aaa;
      > svg {
        margin-right: 6px;
      }

      > p{
        flex: 1;
      }
    }

    & + div{
      margin-top: 8px;
    }

    > span:last-child{
      font-weight: bold;
    }

    &::before {
      content: '';
      border-style: solid;
      border-color: #fff transparent;
      border-width: 0px 6px 6px 6px;
      top: -6px;
      position: absolute;
      right: 1px;
      transform: translateX(-50%);
    }

    &:last-child{
      margin-top: 24px;
    }
  }
`;
