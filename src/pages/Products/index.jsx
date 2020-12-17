import React, { useState, useEffect } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container, ProductList, Pagination } from './styles';

import { products, categories } from '../../database';

const perPage = 2;

export default function Products() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const numberOfPages = Math.trunc(products.length / perPage);

    if (products.length % 10 === 0) setTotalPage(numberOfPages);
    else setTotalPage(numberOfPages + 1);
  }, []);

  const handleUpdatePagination = (value) => {
    if (value <= 0 || value > totalPage) {
      return;
    }

    setPage(value);
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <select>
            <option value="">Selecione a categoria</option>
            {
              categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))
            }
          </select>

          <ProductList>
            {products.slice(perPage * (page - 1), perPage * page).map((product) => (
              <div key={product.id}>
                <div>
                  <span>{product.name}</span>
                  <small>{product.description}</small>
                </div>
                <button type="button">Adicionar ao carrinho</button>
              </div>

            ))}
          </ProductList>

          <Pagination>
            <span>{`página ${page} de ${totalPage}`}</span>
            <ul>
              <li>
                <button type="button" aria-label="Página Anterior" onClick={() => handleUpdatePagination(page - 1)}><FiChevronLeft size={20} /></button>
              </li>
              <li>
                <button type="button" aria-label="Página Anterior" onClick={() => handleUpdatePagination(page + 1)}><FiChevronRight size={20} /></button>
              </li>
            </ul>
          </Pagination>
        </div>
      </Container>
    </>
  );
}
