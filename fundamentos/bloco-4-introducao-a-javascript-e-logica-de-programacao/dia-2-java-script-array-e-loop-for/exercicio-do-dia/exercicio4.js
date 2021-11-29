//exercicio3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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