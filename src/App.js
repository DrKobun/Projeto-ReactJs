import './App.css'; 
import Carrossel from './carrossel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header';
import CarrosselCards from './CarrosselCards';
import Footer from './Footer';
import Carrinho from './Carrinho';
import Formulario from './formulario';
import React, {useState, useEffect} from 'react';
import Componente from './Componente';
import { CiShoppingCart } from 'react-icons/ci';

function App() 
{
  
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarAoValorTotal = (valorLivro) => {
    setValorTotal((prevValorTotal) => prevValorTotal + valorLivro);
  };
    const paginaListaDesejos=(
      <div>

        <div class="container">
          <Header />
          <Componente />
        </div>
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <Footer/>
      </div>
    );
    const paginaPrincipal =(
      <div>
        <div class="container">
          <Header />
        </div>

          <Carrossel valorTotal={valorTotal} />

          <div class="container">
            
            <br />
            <br />
            
            <CarrosselCards adicionarAoValorTotal={adicionarAoValorTotal} />
            
          </div>
          <Footer />

      </div>
    );
    
    const paginaCarrinho =(
      <div class='container'>
      <Header/>
      <Carrinho/>   
      </div>
    );
    const paginaFormulario=(
      <div class='container'>
        <Header/>
        <br /><br /><br /><br /><br />
        <Formulario /> 
      </div>
    );
        useEffect(
          ()=>{
            const url = window.location.href
            const res = url.split('?')
            setPagina(res[1])
          }
        )
      
      const LinksPaginas=(p)=>{
        if(p==1){
          window.open('http://localhost:3000?1', '_self')
        } else if(p==2){
          window.open('http://localhost:3000?2', '_self')
        } else if(p==3){
          window.open('http://localhost:3000?3', '_self')
        }else if(p==4){
          window.open('http://localhost:3000?4', '_self')
        }
      }
      const [pagina, setPagina]=useState(0);

      
      const retornarPagina=()=>{
        if(pagina==1){
          return paginaPrincipal
        } else if(pagina==2){
          return paginaCarrinho 
          
        }else if(pagina==3){
         return paginaFormulario
        }else if(pagina==4){
          return paginaListaDesejos
         } 
        else{
          return paginaPrincipal
        }
      }
      
  return (
    <>   
    {retornarPagina()}
    </>
    );
    
};

export default App;