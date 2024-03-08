import { LitElement, html, css } from 'lit';

export class AnimatedBackground extends LitElement {
  static styles = css `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      135deg,
      #0a0a0a,
      #1d1d1d,
      #0a0a0a
    );
    animation: gradientBG 15s ease infinite;
  }
  
  /* Nueva regla de estilo para cambiar el color de fondo al pasar el cursor */
  :host(:hover) {
    background: linear-gradient(
      135deg,
      #0a0a0a,
      #333333,
      #0a0a0a
    );
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: opacity 0.5s ease; /* Transición para la aparición/desaparición del contenido */
    position: relative; /* Añadido para posicionamiento relativo */
    color: #ffffff; /* Color del texto */
  }
  
  .hidden {
    opacity: 0; /* Oculta el contenido */
  }
  
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  p {
    font-size: 3vw; /* Tamaño de fuente ajustado */
  }
  
  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    animation: starsAnimation 10s linear infinite;
    pointer-events: none;
    z-index: -1; /* Asegura que las estrellas estén detrás del contenido */
  }
  
  @keyframes starsAnimation {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
  `;

  static properties = {
    // Propiedad para controlar la visibilidad de los contadores y del botón
    showContent: { type: Boolean }
  };

  constructor() {
    super();
    // Inicializa la propiedad showContent en true para mostrar el texto inicialmente
    this.showContent = true;
  }

  render() {
    return html`
      <div class="container ${this.showContent ? '' : 'hidden'}">
        <div class="content">
          <p>WELCOME TO LIT💫</p>
          <button @click=${this._handleClick}>Show Counters</button>
        </div>
        <div class="stars"></div> <!-- Capa de estrellas -->
      </div>
      ${this.showContent ? '' : html`
        <eit-counter counter="10"></eit-counter>
        <eit-counter counter="300"></eit-counter>
      `}
    `;
  }

  _handleClick() {
    // Cambia el estado para mostrar los contadores y ocultar el texto
    this.showContent = false;
  }
}

customElements.define('animated-background', AnimatedBackground);