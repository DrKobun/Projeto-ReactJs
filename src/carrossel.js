import './index.css';
import React from 'react';
import Slider from 'react-slick';
import ImagemLivro from "./img/A.jpg";
import ImagemLivro2 from "./img/B.jpg";
import ImagemLivro3 from "./img/C.jpg";

const Carrossel = () => 
{
    const imagens = [
        ImagemLivro,
        ImagemLivro2,
        ImagemLivro3,
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return(
      <>
            <div class='carrossel-container'>
              
              <Slider {...settings}>
                {imagens.map((imagem, index) => (
                  <div key={index}>
                    <img src={imagem} alt={`Imagem ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
      </>
    );
};

export default Carrossel;