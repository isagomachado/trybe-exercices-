// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (jokeData) => {
  const jokeContainer = document.querySelector("#jokeContainer");
  
  jokeContainer.innerHTML = jokeData.joke
}


const fetchJoke = () => {
  const object = {  // declarando o objeto com as informações sobre a requisição a ser feita
    method: 'GET',
    headers: {'Accept': 'application/json'} // tipo da resposta que desejo receber - tem especificado na documentação da api, posso mudar para recer uma pagina html (text/html) ou apenas a piada (text/plain)
  };

  const joke = fetch(API_URL, object)
  .then((response) => response.json())
  .then((data) => {
    append(data)
  }); 

  console.log(joke)
};

window.onload = () => fetchJoke();