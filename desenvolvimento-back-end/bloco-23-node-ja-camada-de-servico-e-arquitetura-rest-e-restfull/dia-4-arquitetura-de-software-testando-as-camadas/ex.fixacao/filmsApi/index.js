const { Console } = require('console');
const express = require('express');

const MovieConroller = require('./controllers/movieController');

const app = express();

app.use(express.json());

app.post('/movies', MovieConroller.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  Console.log(`Ouvindo a porta ${PORT}`)
});