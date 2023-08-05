import React, { useState } from 'react';
import OPoderDoHabito from "./img/OPoderDoHabito.jpg";
import PaiRico from "./img/PaiRicoPaiPobre.jpg";
import Mindset from "./img/Mindset.jpg";
import ArteGuerra from "./img/ArtedaGuerra.jpg";
import HarryUm from "./img/Harry-1.jpg";
import HarryDois from "./img/Harry-2.jpg";
import HarryTres from "./img/Harry-3.jpg";
import HarryQuatro from "./img/Harry-4.jpg";
import HarryCinco from "./img/Harry-5.jpg";
import HarrySeis from "./img/Harry-6.jpg";
import HarrySete from "./img/Harry-7.jpg";
import HarryTodos from "./img/Harry-todos.jpg";

export const valorTotalLivros = 0;

const CarrosselCards = () => {
  
  
  const cards = [
    
    { id: 1, titulo: 'O Poder do Hábito', imagem: OPoderDoHabito, preco: 'R$: 69,90', valorLivro: 69.90 },
    { id: 2, titulo: 'Pai Rico Pai Pobre', imagem: PaiRico, preco: 'R$: 52,70',valorLivro: 52.70 },
    { id: 3, titulo: 'Mindset', imagem: Mindset, preco: 'R$: 48,10', valorLivro: 48.10 },
    { id: 4, titulo: 'A Arte da Guerra', imagem: ArteGuerra, preco: 'R$: 42,95', valorLivro:42.95 },
  ];

  const cardsDois = [
    { id: 5, titulo: 'Harry Potter e a Pedra Filosofal', imagem: HarryUm, preco: 'R$: 37,11', valorLivro: 37.11 },
    { id: 6, titulo: 'Harry Potter e a Câmara Secreta', imagem: HarryDois, preco: 'R$: 31,50', valorLivro: 31.50 },
    { id: 7, titulo: 'Harry Potter e o prisioneiro de Azkaban', imagem: HarryTres, preco: 'R$: 34,25', valorLivro: 34.25 },
    { id: 8, titulo: 'Harry Potter e o Cálice de Fogo', imagem: HarryQuatro, preco: 'R$: 45,99', valorLivro: 45.99 },
  ]

  const cardsTres = [
    { id: 9, titulo: 'Harry Potter e a Ordem da Fênix', imagem: HarryCinco, preco: 'R$: 53,99', valorLivro: 53.99 },
    { id: 10, titulo: 'Harry Potter e o enigma do Príncipe', imagem: HarrySeis, preco: 'R$: 45,99', valorLivro: 45.99 },
    { id: 11, titulo: 'Harry Potter e as Relíquias da Morte', imagem: HarrySete, preco: 'R$: 47,99', valorLivro: 47.99 },
    { id: 12, titulo: 'Harry Potter e o Cálice de Fogo', imagem: HarryTodos, preco: 'R$: 395,33', valorLivro: 395.33 },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
  };

  const imageStyles = {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    
  };

  const titleStyles = {
    textAlign: 'center',
    margin: '10px 0',
  };

  const buttonStyles = {
    backgroundColor: 'gold',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    width: '100%',
    height: '50px',
    fontWeight: 'bold',
    outline:'none',
  };

  const cardStyles = {
    textAlign: 'center', 
    borderRadius: '5px', 
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
    flex: '0 0 20%',
    margin: '31px',
  };

  const precoLivros = 
  {
    textAlign: 'left',
    fontWeight: 'bold',

  };

  const [valorTotalLivros, setValorTotalLivros] = useState(0);

  const adicionarAoValorTotal = (valorLivro) => {
    setValorTotalLivros((prevValorTotal) => prevValorTotal + valorLivro);
  }; 

  return (
 
    <div>
      
        <b>Valor total dos livros: {valorTotalLivros.toFixed(2)}</b>
      <h2>Bests Sellers: </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center', backgroundColor:'white'}}>
        {cards.map((card) => (
          <div key={card.id} style={cardStyles}>
            <img src={card.imagem} alt={card.titulo} style={imageStyles} />
            <h3 style={titleStyles}>{card.titulo}</h3>
            <p style={precoLivros}>{card.preco}</p>
            
            <button style={buttonStyles} onClick={() => adicionarAoValorTotal(card.valorLivro)}>Comprar</button>         
          </div>
        ))}
      </div>
          <h2>Harry Potter:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center', backgroundColor:'white'}}>
        {cardsDois.map((cardsDois) => (
          <div key={cardsDois.id} style={cardStyles}>
            <img src={cardsDois.imagem} alt={cardsDois.titulo} style={imageStyles} />
            <h3 style={titleStyles}>{cardsDois.titulo}</h3>
            <p style={precoLivros}>{cardsDois.preco}</p>
            <button style={buttonStyles} onClick={() => adicionarAoValorTotal(cardsDois.valorLivro)}>Comprar</button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center', backgroundColor:'white'}}>
        {cardsTres.map((cardsTres) => (
          <div key={cardsTres.id} style={cardStyles}>
            <img src={cardsTres.imagem} alt={cardsTres.titulo} style={imageStyles} />
            <h3 style={titleStyles}>{cardsTres.titulo}</h3>
            <p style={precoLivros}>{cardsTres.preco}</p>
            <button style={buttonStyles} onClick={() => adicionarAoValorTotal(cardsTres.valorLivro)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>

  );
  
};

export default CarrosselCards;