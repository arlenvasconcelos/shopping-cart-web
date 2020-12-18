import React from 'react';
import { FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, ShoppingCartContent } from './styles';

export default function Header() {
  const { items } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <Container>
        <Link to="/">
          <FiChevronLeft size="30" />
        </Link>
        {/* <img src="asas" alt="Logo" /> */}
        <span>Shopping Cart</span>
        <ShoppingCartContent>
          {
            !!items.length && (
              <span>{items.length}</span>
            )
          }
          <Link to="/shopping-cart">
            <FiShoppingCart size="30" />
          </Link>
        </ShoppingCartContent>

      </Container>
    </>
  );
}
