let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio1
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

//exercicio2
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
console.log("A soma dos numeros dentro da array é:", soma);

//exercicio3
let soma2 = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma2 = soma2 + numbers[i];
}

let media = soma2 / numbers.length

console.log("A média aritmética é:", media)

//exercicio4 - complemento do codigo anterior
if (media > 20){
  console.log("Valor maior que 20")
}else {
  console.log("Valor menor ou igual a 20")
}

//exercicio5
let maior = 0

for (let index = 0; index < numbers.length; index += 1){
  if (maior < numbers[index]){
    maior = numbers[index]
  }
}
 console.log("O maior numero da array é:", maior)

 //exercicio6
 let impares = []

 for (let i = 0; i < numbers.length; i += 1){
   if (numbers[i] % 2 !== 0){
     impares.push(numbers[i])
   }
 }
 console.log(impares)