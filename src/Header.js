
import './index.css';
import React, {useState, useEffect} from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Header = () => 
{
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
  } else if(p==4){
    window.open('http://localhost:3000?4', '_self')
  } 
}
 const [pagina, setPagina]=useState(0)


    return(
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/?1" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        
        <span class="fs-4">Mundo dos Livros</span>
        </a>

      <ul class="nav nav-pills">
        
        <div>
        <i class="bi bi-cart"></i>
        
            <button onClick={()=>LinksPaginas(1)} class="btn btn-primary"> Home</button>
            <button onClick={()=>LinksPaginas(2)} class="btn btn-primary"><CiShoppingCart outline='none'  /></button>
            <button onClick={()=>LinksPaginas(3)} class="btn btn-primary"> Newsletter</button>
            <button onClick={()=>LinksPaginas(4)} class="btn btn-primary"> Lista de Desejos</button>
        </div>
      </ul>
     
    </header>

    );
}
export default Header;