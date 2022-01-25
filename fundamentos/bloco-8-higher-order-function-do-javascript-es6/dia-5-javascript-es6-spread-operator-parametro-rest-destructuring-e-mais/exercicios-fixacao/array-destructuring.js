////////// EXERCICIO 1//////////////
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring


const [text, func] = saudacoes

func(text)

// console.log(text)
// console.log(func)

///////////// EXRCICIO 2//////////////

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


[comida, animal, bebida] = [animal, bebida, comida]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

////////////// EXERCICIO 3 ///////////////////

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [a, b, c, ...rest] = numerosPares

console.log(rest); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

