const fs = require('fs').promises;

//exemplo para entender promises (uso de callbacks)

// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever arquivo: ${err.message}`);
//   });

// Qualquer função com ASYNC retorna uma promise

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Muda meu textão');
    console.log('Arquivo escrito com sucesso');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main() // chama a função main para que ela seja executada
