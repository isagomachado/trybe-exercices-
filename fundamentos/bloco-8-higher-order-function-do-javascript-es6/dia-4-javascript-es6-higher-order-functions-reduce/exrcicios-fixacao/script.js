// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0 ? true : false;

const useFilter = numbers.filter(isEven)  // aqui está guardado um array de numeros pares que foram filtrados da array original numbers

console.log(useFilter)

const somaTudo = (acumulador, number) => acumulador + number

const useReduce = useFilter.reduce(somaTudo, 5)

console.log(useReduce)


////////////////// SOLUÇÃO ALTERNATIVA (do course)

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152


////////////////////// USANDO APENAS RDUCE 

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPair = (currentValue, number) => (
//   (number % 2 === 0) ? currentValue + number : currentValue
// );

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152



