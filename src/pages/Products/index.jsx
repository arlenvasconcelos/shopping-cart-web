import React from 'react';

import Header from '../../components/Header';

import { Container, ProductsList } from './styles';

export default function Products() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <select>
            <option value="">Selecione a categoria</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>

          <ProductsList>
            <div>
              <span>Coca cola lata</span>
              <button type="button">Adicionar ao carrinho</button>
            </div>
            <div>
              <span>Coca cola lata</span>
              <button type="button">Adicionar ao carrinho</button>
            </div>
            <div>
              <span>Coca cola lata</span>
              <button type="button">Adicionar ao carrinho</button>
            </div>
          </ProductsList>
        </div>
      </Container>
    </>
  );
}
