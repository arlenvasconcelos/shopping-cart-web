import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  min-height: calc(100vh - 64px);
  width: 100vw;

  display: flex;

  > div{
    margin: 40px auto;
    width: 450px;
    padding: 0px 16px;

    text-align: center;

    > button {
      margin: 32px auto;
      float: right;

      background-color: #795CB3;
      border: 0;
      border-radius: 3px;
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

    tr{

      td{
        /* text-align: start; */
        padding: 8px 0;

        &:first-child{
          width: fit-content;
          div{
            display: flex;
            align-items: center;

            > button{
              background-color: transparent;
              border: 0;

              display: flex;
              align-items: center;
              justify-content: center;

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

        &:last-child{
          text-align: end;
        }

        > div {
          small{
            color: #A1a1a1;
          }
        }
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  svg{
    margin-right: 8px;
  }
`;
