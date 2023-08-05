import React, { useState } from 'react';
import ItemList from './ItemList';

const Componente = () => {
  const [items, setItems] = useState([
    
    
  ]);

  const [novoItem, setNovoItem] = useState('');

  const cadastrarNovoItem = (event) => {
    event.preventDefault();
    if (novoItem.trim() !== '') 
    {
      const novoItemObj = {
        id: Date.now(),
        nome: novoItem,
      };
      setItems([...items, novoItemObj]);
      setNovoItem('');
    }
  };

  return (
    <div class='container'>
     <h2>Lista de livros desejados</h2>
      <ItemList items={items} />
      <form onSubmit={cadastrarNovoItem}>
        <input
          type="text"
          value={novoItem}
          onChange={(event) => setNovoItem(event.target.value)}
          placeholder="Digite o nome do livro..."
          class="form-control"
        />
        <br />
        
        <button type="submit" class='btn btn-primary'>Adicionar</button>
      </form>
    </div>
  );
};

export default Componente;