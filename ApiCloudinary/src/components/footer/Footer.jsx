import React from 'react';
import styled from 'styled-components';

// Cambiado "Footer" por "footer" para coincidir con el nombre de la etiqueta HTML
const FooterContainer = styled.footer`
  background-color: #393939;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 10vh;
  
  img {
    width: auto;
    height: auto;
    max-width: 45px;
    
  }

  img:hover {
    transform: scale(1.3) rotate(360deg);
    transition: 0.5s;
    
  }

  img:active {
    transform: scale(0.9);
  }

  

  .footer-container {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    
  }

`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-container">
      </div>
    </FooterContainer>
  );
}

export default Footer;
