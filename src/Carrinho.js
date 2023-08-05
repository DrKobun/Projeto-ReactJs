import React from 'react';
import { useLocation } from 'react-router-dom';
import CarrosselCards from './CarrosselCards';
import { valorTotalLivros } from './CarrosselCards';

var total = valorTotalLivros;

const Carrinho = () => {
  
  return(
    <div>
       <h2>Carrinho de Compras</h2>
      <p>Total: R$ {total.toFixed(2)}</p>
    </div> 
  );
};

export default Carrinho;
