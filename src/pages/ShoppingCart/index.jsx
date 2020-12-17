import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FiShoppingBag, FiMinusCircle, FiPlusCircle, FiFrown,
} from 'react-icons/fi';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import {
  Container, ItemList, TopContent, EmptyCart,
} from './styles';
import { addItem, decreaseItem, removeItem } from '../../store/actions/shoppingCart';

export default function ShoppingCart() {
  const { items, total } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addItem({ product: item.product }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem({ product: item.product }));
    } else {
      dispatch(decreaseItem({ product: item.product }));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Finalizar Pedido</h1>
          { !!items.length
          && (
            <>
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
                  {
                    items.map((item) => (
                      <tr key={item.product.id}>
                        <td>
                          <div>
                            <button type="button" aria-label="Remove" onClick={() => handleDecrement(item)}><FiMinusCircle size="22" /></button>
                            <span>{item.quantity}</span>
                            <button type="button" aria-label="Add" onClick={() => handleIncrement(item)}><FiPlusCircle size="22" /></button>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p>{item.product.name}</p>
                            <small>{item.product.description}</small>
                          </div>
                        </td>
                        <td>
                          {formatValue(item.product.price)}
                        </td>
                      </tr>
                    ))
                  }
                  <tr>
                    <td colSpan="2">
                      Total
                    </td>
                    <td>
                      {formatValue(total)}
                    </td>
                  </tr>
                </table>

              </ItemList>
              <button type="button">Finalizar Compra</button>
            </>
          )}

          { !items.length && (
            <EmptyCart>
              <FiFrown size={30} />
              <p>Seu carrinho está vazio.</p>

            </EmptyCart>
          )}

        </div>

      </Container>
    </>
  );
}
