import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { CarrinhoProvider } from './CarrinhoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <CarrinhoProvider>
    <App />
  </CarrinhoProvider>,
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
