// import logo from './logo.svg';
// import './App.css';

// const textJSX = 'JSX';

//// configuração padrão da pagina quando instala 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
// 
// exercicio de fixação sobre JSX
// 
//       <section>
//         <h1>Hello, { textJSX }</h1>
//       </section>
//       </header>

//     </div>
//   );
// }

//// codigo para o exercicio de fixação sobre reactDOM.render

// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(App, 1000);


// export default App;


import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;
