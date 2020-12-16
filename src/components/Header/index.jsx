import React from 'react';
import { FiShoppingCart, FiChevronLeft } from 'react-icons/fi';

import { Container, ShoppingCartContent } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <button type="button">
          <FiChevronLeft size="30" />
        </button>
        {/* <img src="asas" alt="Logo" /> */}
        <span>Shopping Cart</span>
        <ShoppingCartContent>
          <span>1</span>
          <button type="button">
            <FiShoppingCart size="30" />
          </button>
        </ShoppingCartContent>

      </Container>
    </>
  );
}
