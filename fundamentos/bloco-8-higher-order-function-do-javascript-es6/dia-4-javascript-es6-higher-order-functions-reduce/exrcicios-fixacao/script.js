// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0 ? true : false;

const useFilter = numbers.filter(isEven)  // aqui está guardado um array de numeros pares que foram filtrados da array original numbers

console.log(useFilter)

const somaTudo = (acumulador, number) => acumulador + number

const useReduce = useFilter.reduce(somaTudo, 5)

console.log(useReduce)
