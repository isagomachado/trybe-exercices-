const express = require('express'); //importando express - ele precisa ser instalado antes

const app = express(); // 1- instanciar a constante app como uma chamada a função express

app.get('/hello', handleHelloWorldRequest); // 2 - informa ao express que: quando uma requisição to tipo GET for recebina no caminho /hello a função deve ser chamada

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
}) // 3 - informar para a api qual porta ela deve ouvir

function handleHelloWorldRequest(require, response) {
  response.status(200).send('Hello World!'); // 4 - ao tratar a requisição GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World'
}
