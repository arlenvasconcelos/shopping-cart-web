import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container, ProductList, Pagination } from './styles';

import { products, categories } from '../../database';

import { addItem } from '../../store/actions/shoppingCart';

const perPage = 2;

export default function Products() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [productsList, setProductsList] = useState(products);

  const handleUpdatePagination = (value) => {
    if (value <= 0 || value > totalPage) {
      return;
    }

    setPage(value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddItem = (product) => {
    dispatch(addItem({ product }));
  };

  useEffect(() => {
    const numberOfPages = Math.trunc(productsList.length / perPage);

    if (productsList.length % 10 === 0) setTotalPage(numberOfPages);
    else setTotalPage(numberOfPages + 1);
  }, [productsList]);

  useEffect(() => {
    if (filter === '') {
      setProductsList(products);
    } else {
      setProductsList(products.filter((product) => (product.categoryId === Number(filter))));
    }
  }, [filter]);

  useEffect(() => {
    handleUpdatePagination(1);
  }, [productsList]);

  return (
    <>
      <Header />
      <Container>
        <div>
          <select defaultValue={filter} onChange={handleFilterChange}>
            <option value="">Selecione uma categoria</option>
            {
              categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))
            }
          </select>

          <ProductList>
            {productsList.slice(perPage * (page - 1), perPage * page).map((product) => (
              <div key={product.id}>
                <div>
                  <span>{product.name}</span>
                  <small>{product.description}</small>
                </div>
                <button type="button" onClick={() => handleAddItem(product)}>Adicionar ao carrinho</button>
              </div>

            ))}

            {!productsList.length && (
              <p>Desculpa. Não temos produtos para o filtro selecionado.</p>
            )}
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
