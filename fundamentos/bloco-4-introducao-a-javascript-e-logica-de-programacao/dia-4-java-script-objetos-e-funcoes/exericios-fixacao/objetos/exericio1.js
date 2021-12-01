let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

let mensagem =
  "A jogadora " +
  player.name +
  " " +
  player.lastName +
  " tem " +
  player.age +
  "anos de idade";

console.log(mensagem);

player.bestInTheWord = [2006, 2007, 2008, 2009, 2010, 2018];

let mensagem2 =
  "A jogadora " +
  player.name +
  " " +
  player.lastName +
  " foi eleita a melhor jogadora do mundo por " +
  player["bestInTheWord"].length +
  " vezes!";

  console.log(mensagem2)
