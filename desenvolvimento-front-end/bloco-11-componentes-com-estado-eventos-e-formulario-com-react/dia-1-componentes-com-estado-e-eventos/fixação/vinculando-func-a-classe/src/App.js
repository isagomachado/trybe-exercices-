// Primeira parte - falha, pois o js tem dificuldade em  ler o this 

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick() {
//     // Essa chamada ao `this` retorna `undefined`? !
//     console.log(this)
//     console.log('Clicou')
//   }

//   render() {
//     // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
//     console.log(this)
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;

//////////////////////////////////////////////
// segunda parte do codigo - inclui parte do constructor com o metodo bind() que coneta o objeto this a função 

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
