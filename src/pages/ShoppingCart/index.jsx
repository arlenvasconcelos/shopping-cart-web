import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  FiShoppingBag, FiMinusCircle, FiPlusCircle, FiFrown,
} from 'react-icons/fi';

import Header from '../../components/Header';
import Modal from '../../components/Modal';

import formatValue from '../../utils/formatValue';
import calculateTimeLeft from '../../utils/calculateTimeLeft';

import {
  addItem, decreaseItem, removeItem, clearCart,
} from '../../store/actions/shoppingCart';

import {
  Container, ItemList, TopContent, EmptyCart,
} from './styles';

export default function ShoppingCart() {
  const {
    items, total, time,
  } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [modalBtnTitle, setModalBtnTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');
  const [timeLeft, setTimeLeft] = useState(() => {
    if (time) return calculateTimeLeft(time);
    return {};
  });

  const handleIncrement = (item) => {
    dispatch(addItem({ product: item.product }));
  };

  const handleDecrement = (item) => {
    if (items.length === 1 && item.quantity === 1) {
      setModalMessage('Você removeu o último item do carrinho.');
      setModalBtnTitle('Continuar comprando');
      setModalType('warning');
      setShowModal(true);
    }

    if (item.quantity === 1) {
      dispatch(removeItem({ product: item.product }));
    } else {
      dispatch(decreaseItem({ product: item.product }));
    }
  };

  const handleFinish = () => {
    setModalMessage('Pedido realizado com sucesso.');
    setModalBtnTitle('Fechar');
    setModalType('success');
    setShowModal(true);
  };

  const handleModalClose = () => {
    if (modalType === 'success') {
      dispatch(clearCart());
      history.push('/');
    }
    setShowModal(false);
  };

  const modalAction = () => {
    if (modalType === 'success') {
      dispatch(clearCart());
    }
    history.push('/');
  };

  useEffect(() => {
    setTimeout(() => {
      if (time > new Date().getTime()) {
        setTimeLeft(calculateTimeLeft(time));
      } else {
        dispatch(clearCart());
      }
    }, 1000);
  });

  // useEffect(() => {
  //   if (timeLeft.seconds === 0) dispatch(clearCart());
  // }, [timeLeft]);

  // useEffect(() => {
  //   if (expiredTime) {
  //     dispatch(clearCart());
  //   }
  // }, [expiredTime]);

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
                  {timeLeft && (
                  <p>
                    Tempo restante:
                    {' '}
                    {`${timeLeft.minutes}:${timeLeft.seconds}`}
                  </p>
                  )}
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
              <button type="button" onClick={handleFinish}>Finalizar Compra</button>
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
      {
        showModal && (
          <Modal
            btnTitle={modalBtnTitle}
            message={modalMessage}
            handleClose={handleModalClose}
            action={modalAction}
            type={modalType}
          />
        )
      }
    </>
  );
}
