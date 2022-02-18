///////////////////// exemplo de codigo 1 - acrescentei o async antes da declaracão da função 

// const fetch = require('node-fetch');

// const fetchJoke = async () => {  // nessa linha antes do () coloca-se o async 
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.


///////////////////////// exemplo de codigo 2 - refatoração da função anterior para usar o await - armazena a chamada da função fetch() dentro de uma const, e declara o await antes de chamar a função de fato. - espera o fetch() rodar até o ultimo then ou catch pra dar o resultado

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

///////////////////////// exemplo de codigo 3 - reatora e troca thn por try, transoforma data em uma constante que vai receber o response.JSON() - que é a resposta da requisição. depois do escopo do try, colocamos um catch(error) para capturar e tratar o erro 

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.


