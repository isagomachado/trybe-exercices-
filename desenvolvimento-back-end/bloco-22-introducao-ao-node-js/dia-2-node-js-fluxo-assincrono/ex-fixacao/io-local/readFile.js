// const fs = require('fs').promises;
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if(err) {
//     console.error(`não foi possivel ler o arquivo ${nomeDoArquivo}\n Error: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   }

//   console.log(`Conteúdo do arquivo: ${data}`);
// });

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possivel ler o arqivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1) // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  })