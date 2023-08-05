import React from 'react';
import './index.css';

const ItemList = ({ items }) => {
  return (
    <ul className='item-list'>
      {items.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
};

export default ItemList;