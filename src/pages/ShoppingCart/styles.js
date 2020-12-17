import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  height: calc(100vh - 64px);
  width: 100vw;

  display: flex;

  > div{
    margin: 48px auto auto auto;
    width: 450px;

    text-align: center;

    > button {
      margin-top: 32px;
      float: right;

      background-color: #795CB3;
      border: 0;
      padding: 4px 8px;
      color: #fff;
    }
  }
`;

export const TopContent = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;

  svg{
    margin-right: 16px;
  }
`;

export const ItemList = styled.div`
  margin-top: 32px;
  text-align: start;
  table{
    margin-top: 16px;
    width: 100%;
    tbody{
      tr{

        td{
          text-align: start;
          padding: 8px 0;

          &:first-child{
            width: fit-content;
            display: flex;
            align-items: center;
          }

          &:last-child{
            text-align: end;
          }

          > button{
            background-color: transparent;
            border: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            /* width: 25px;
            height: 25px; */
            border-radius: 50%;
            &:first-child{
              background-color: #ff3030;
            }
            &:last-child{
              background-color: #04D361;
            }

            svg{
              margin: auto;
            }
          }

          > span {
            margin: auto 8px;
          }
        }
      }
    }
  }
`;
