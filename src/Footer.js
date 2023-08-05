import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      <p>Contato: mundodoslivros@gmail.com</p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  textAlign: 'center',
  marginTop: 'auto',
  bottom: '100%',
  left: '0',
  width: '100%',
  
  
};

export default Footer;
