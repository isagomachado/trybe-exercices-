const fs = require('fs') // Modulo nativo do node que ermite interagir com arquivos

function readFilePromisse (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => { // calback para a função de ler arquivo, primeiro parametro é um possivel erro, cso não ocorra, o segundo parametro recebe o conteudo do arquivo
      if (err) reject(err);
      resolve(content)
    });

  });
}

readFilePromisse('./file.txt') // a função promete que vai ler o arquivo 
  .then((content) => { // considera-se que a promise obteve sucesso e retorna o conteudo do arquivo
    console.log(`Lido arquivo com ${content.byteLength} bytes`) // escrevo o resultado no consle
    console.log(content.toString('utf8'))
  })
  .catch((err) => { // caso a promesa falhe na execução
    console.error(`Erro ao ler arquivo: ${err.message}`)
  })
