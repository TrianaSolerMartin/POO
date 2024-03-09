import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
    static styles= [
    css `
    :host {
        display: inline-block;
        padding: 1em;
        border: 2px solid #0072ff; /* Color azul similar al de la NASA */
        border-radius: 10px; /* Bordes redondeados */
        margin: 10px;
        background-color: #000; /* Fondo negro */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra suave */
        transition: box-shadow 0.3s ease; /* Transición para la sombra al pasar el cursor */
    }

    /* Estilos para el título */
    h2 {
        color: #0072ff; /* Color azul similar al de la NASA */
        font-size: 1.5em; /* Tamaño de fuente aumentado */
        margin-bottom: 0.5em; /* Espaciado inferior reducido */
    }

    /* Estilos para el párrafo */
    .parrafo {
        color: #fff; /* Color del texto del contador */
        font-size: 2.5em; /* Tamaño de fuente aumentado */
        margin: 0; /* Margen eliminado */
    }
    
    /* Estilos para el input */
    input {
        width: 50px; /* Ancho aumentado */
        font-size: 1.2em; /* Tamaño de fuente aumentado */
        margin-right: 0.5em; /* Margen derecho añadido */
    }

    /* Estilos para los botones */
    button {
        padding: 10px 20px; /* Aumento del padding */
        font-size: 1em; /* Tamaño de fuente reducido */
        background-color: #0072ff; /* Color azul similar al de la NASA */
        color: white; /* Color del texto */
        border: none; /* Eliminación del borde */
        border-radius: 5px; /* Bordes redondeados */
        cursor: pointer;
        transition: background-color 0.3s ease; /* Transición para el cambio de color de fondo */
    }

    button:hover {
        background-color: #0056b3; /* Color de fondo en estado hover */
    }`
    ];
    
    static properties = {
        counter: { type: Number,
        reflect: true }
    }

    constructor () {
        super();
        this.counter = 0;
    }

    render () {
        return html `
        <h2>🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍</h2>
        <p class="parrafo">${this.counter}</p>
        <input id= "quantity" type = "number">
        <button @click=${this.increment}>+1</button>
        <button @click=${this.decrement}>-1</button>
        `;
    }

    get quantity() {
        return this.shadowRoot.getElementById('quantity').value;
    }

    increment () {
        this.counter += parseInt(this.quantity);
    }

    decrement () {
        this.counter -= parseInt(this.quantity)
    }
}

customElements.define('eit-counter', EitCounter);