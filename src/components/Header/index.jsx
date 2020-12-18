import React from 'react';
import { FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import formatValue from '../../utils/formatValue';

import { Container, ShoppingCartContent, ShoppingCartModal } from './styles';

export default function Header() {
  const {
    items, total,
  } = useSelector((state) => state.shoppingCart);

  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <div>
          {
            pathname !== '/' && (
              <Link to="/">
                <FiChevronLeft size="30" />
              </Link>
            )
          }
        </div>
        <span>Shopping All</span>
        <ShoppingCartContent>
          {
            pathname === '/' && (
              <>
                {
                  !!items.length && (
                    <span>{items.length}</span>
                  )
                }
                <Link to="/shopping-cart">
                  <FiShoppingCart size="30" />
                </Link>

                <ShoppingCartModal>
                  <div>
                    <FiShoppingCart />
                    <p>Meu carrinho</p>
                  </div>
                  {items.map((item) => (
                    <div key={item.product.id}>
                      <span>{item.product.name}</span>
                      <span>{formatValue(item.product.price)}</span>
                    </div>
                  ))}

                  <div>
                    <p>Total</p>
                    <p>{formatValue(total)}</p>
                  </div>
                </ShoppingCartModal>
              </>
            )
          }
        </ShoppingCartContent>

      </Container>
    </>
  );
}
