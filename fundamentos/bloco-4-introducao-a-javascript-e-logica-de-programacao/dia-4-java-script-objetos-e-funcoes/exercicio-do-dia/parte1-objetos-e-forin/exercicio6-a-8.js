let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

//exercicio6

let mensagem = "O livro favorito de " +
leitor.nome +
" " +
leitor.sobrenome +
" se chama " +
"'" +
leitor.livrosFavoritos[0].titulo+
"'"
console.log(mensagem);


