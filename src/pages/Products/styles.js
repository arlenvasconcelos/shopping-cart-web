import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: calc(100vh - 64px);
  width: 100vw;

  display: flex;

  > div{
    margin: 48px auto auto auto;
    width: 450px;

    select{
      width: 100%;
      height: 32px;
      border-radius: 0px;
      background-color: #fff;
      border: 1px solid #ddd;
      color: #3A3A3A;
      font-size: 15px;

    }
  }



`;

export const ProductList = styled.div`
  margin-top: 32px;

  width: 100;
  > div{
    width: 100%;
    display: flex;
    background-color: white;
    padding: 16px;

    & + div {
      margin-top: 5px;
    }

    span{
      flex: 1;
      margin: auto;
    }

    button{
      background-color: #795CB3;
      margin: auto;
      color: #fff;
      border: 0;
      padding: 8px;
      font-size: 14px;

      transition: background-color 0.2s;

      &:hover{
        background-color: ${shade(0.2, '#795CB3')}
      }
    }
  }
`;
