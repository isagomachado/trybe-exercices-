let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,4];
let impares = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    impares.push(numbers[i]);
  } else if (impares.length === 0 && i === numbers.length -1 ) {
    console.log("nenhum valor ímpar encontrado");
  }

  if(i === numbers.length -1){
    console.log(impares);
  }
}


