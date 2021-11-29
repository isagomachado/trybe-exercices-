let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio1
for (let i = 0; i < numbers.length; i += 1){
  console.log(numbers[i])
}

//exercicio2
let soma = 0

for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}
console.log("A soma dos numeros dentro da array é:", soma)