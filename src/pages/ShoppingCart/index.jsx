import React from 'react';
import { FiShoppingBag, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, ItemList, TopContent } from './styles';

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Finalizar Pedido</h1>
          <TopContent>
            <FiShoppingBag size="50" />
            <div>
              <strong>Mercado do seu Zé</strong>
              <p>09:54 min restantes</p>
            </div>
          </TopContent>
          <ItemList>
            <p>Revise seus Itens</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <button type="button" aria-label="Add"><FiMinusCircle size="22" /></button>
                    <span>1</span>
                    <button type="button" aria-label="Remove"><FiPlusCircle size="22" /></button>
                  </td>
                  <td>
                    Coca Cola
                  </td>
                  <td>
                    R$ 3,50
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" aria-label="Add"><FiMinusCircle size="22" /></button>
                    <span>1</span>
                    <button type="button" aria-label="Remove"><FiPlusCircle size="22" /></button>
                  </td>
                  <td>
                    Coca Cola
                  </td>
                  <td>
                    R$ 3,50
                  </td>
                </tr>
              </tbody>
            </table>

          </ItemList>
          <button type="button">Finalizar Compra</button>

        </div>

      </Container>
    </>
  );
}
