import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  const adicionarAoCarrinho = (livro) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, livro]);
    setTotal((prevTotal) => prevTotal + livro.valorLivro);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, total, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};