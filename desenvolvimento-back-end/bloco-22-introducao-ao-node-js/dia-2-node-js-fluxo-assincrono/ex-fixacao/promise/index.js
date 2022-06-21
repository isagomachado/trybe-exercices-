const fs = require('fs') // Modulo nativo do node que ermite interagir com arquivos

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => { // calback para a função de ler arquivo, primeiro parametro é um possivel erro, cso não ocorra, o segundo parametro recebe o conteudo do arquivo
      if (err) reject(err);
      resolve(content)
    });

  });
}

// readFilePromise('./file.txt') // a função promete que vai ler o arquivo 
//   .then((content) => { // considera-se que a promise obteve sucesso e retorna o conteudo do arquivo
//     console.log(`Lido arquivo com ${content.byteLength} bytes`) // escrevo o resultado no consle
//     console.log(content.toString('utf8'))
//   })
//   .catch((err) => { // caso a promesa falhe na execução
//     console.error(`Erro ao ler arquivo: ${err.message}`)
//   })


readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
.then((content) => { // Caso arquivo 1 seja lido,
  console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
  return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
})
.then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
  console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
  return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
})
.then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
  console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
})
.catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
  console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
});