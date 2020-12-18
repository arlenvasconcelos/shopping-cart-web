import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: calc(100vh - 64px);
  width: 100vw;

  display: flex;

  > div{
    margin: 40px auto;
    width: 450px;
    padding: 0px 16px;

    select{
      width: 100%;
      height: 32px;
      border-radius: 3px;
      background-color: #fff;
      border: 1px solid #ddd;
      color: #3A3A3A;
      font-size: 15px;

    }

    div{
      border-radius: 3px;
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

    div{
      flex: 1;
      margin: auto;
      span{
        display: block;
      }
      small{
        color: #A1a1a1;
      }
    }

    button{
      background-color: #9466FF;
      margin: auto;
      color: #fff;
      border: 0;
      border-radius: 3px;
      padding: 8px;
      font-size: 14px;

      transition: background-color 0.2s;

      &:hover{
        background-color: ${shade(0.2, '#9466FF')}
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  ul{
    list-style: none;
    display: flex;
    li{
      & + li{
        margin-left: 8px;
      }

      button{
        background-color: transparent;
        border: 0;
      }
    }
  }

`;
