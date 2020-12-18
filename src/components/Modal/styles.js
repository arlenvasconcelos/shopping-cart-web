import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: rgba(0,0,0,0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index:98;

  > div {
    z-index:99;
    background-color: #fff;
    border-radius: 5px;
    width: 400px;
    height: auto;
    min-height: 250px;
    max-width: 100%;
    max-height: 100%;
    padding: 8px;
  }
`;

export const ModalHeader = styled.div`

  > div:first-child{
    width: 100%;
    display: flex;
    height: 32px;
    > button{
      margin-left: auto;
      background-color: transparent;
      border: 0;
      padding: 6px;
      border-radius: 50%;
    }
  }

`;
export const ModalBody = styled.div`
  height: calc(100% - 62px);
  text-align: center;
  > div:first-child {
    margin: 16px 0px;
  }

  > p{
    margin-bottom: 32px;
  }

  > button{
    padding: 4px 8px;
    border: 0;
    background-color: #a4a4a4;
    color: #fff;
    border-radius: 3px;

    transition: background-color 0.2s;

    &:hover{
      background-color: ${shade(0.2, '#a4a4a4')}
    }

  }

`;
