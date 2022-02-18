//////////////// exemplo de codigo 1 - retorna uma promessa e seu estado. e não o que estou requisitando 

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

//////////////////// exemplo te codigo 2 - caso a requisição seja bem sucedida, a função executa o primeiro .then que transforma a requisição e um JSON, e essa resposta é passada para o segundo .then que vai armazenar as informações em data e então será possivel manipular os valores

// const fetch = require('node-fetch'); // Nativo dessa biblioteca 

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

/////////////////////// exemplo de codigo 3 - dando possibilidade para a requisição falhar por algum motivo externo, então coloca uma tratativa de erro com o catch, ele 'captura' o erro. O exemplo tirou o https para forçar o erro 

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported