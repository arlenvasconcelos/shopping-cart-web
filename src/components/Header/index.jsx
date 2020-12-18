import React from 'react';
import { FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import formatValue from '../../utils/formatValue';

import { Container, ShoppingCartContent, ShoppingCartModal } from './styles';

export default function Header() {
  const { items, total } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <Container>
        <Link to="/">
          <FiChevronLeft size="30" />
        </Link>
        {/* <img src="asas" alt="Logo" /> */}
        <span>Shopping All</span>
        <ShoppingCartContent>
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
              <div>
                <span>{item.product.name}</span>
                <span>{formatValue(item.product.price)}</span>
              </div>
            ))}

            <div>
              <p>Total</p>
              <p>{formatValue(total)}</p>
            </div>
          </ShoppingCartModal>
        </ShoppingCartContent>

      </Container>
    </>
  );
}
