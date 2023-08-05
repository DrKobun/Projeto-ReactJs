import React, { useState } from 'react';
import './index.css';

var timeout = 1000;

const botao = () => {
  var elemento = document.getElementById("btn-enviar");
  elemento.innerHTML = "enviando...";
  elemento.disabled = "disabled"; 
  setTimeout(() => {
    console.log('Enviado');              
    elemento.innerHTML = "Enviado";
    elemento.disabled = "enabled"; 
    
  }, timeout);
};

const FormularioEnvio = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

   
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);

    
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <form onSubmit={handleSubmit} class='grupo-formulario'>
       <div className="form-group">
          <label htmlFor="nome" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="form-control"
          />
    </div>

    <br />

    <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
          />
    </div>
    <br />
      <div className='form-group'>
      
        <label htmlFor="mensagem" class='form-label'>Mensagem:</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(event) => setMensagem(event.target.value)} class="form-control"
        />
      </div>

      <button type="submit" class='botao' id='btn-enviar' onClick={botao}>Enviar</button>
    </form>
  );
};

export default FormularioEnvio;
