//Refatorando o código dos 5 primeiros exericios do dia 4.1

//topico1

function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

console.log(soma(5, 13));
console.log(subtrai(5, 13));
console.log(multiplica(5, 13));
console.log(divide(5, 13));
console.log(modulo(5, 13));

//topico2

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maiorNumero(65, 455));

//topico3

function maiorNumero2(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else {
    return c;
  }
}

console.log(maiorNumero2(54, 4744, 725));

//topico4

function verifica(value) {
  if (value > 0) {
    return "Positivo";
  } else if (value < 0) {
    return "Negativo";
  } else {
   return "Zero";
  }
}

console.log(verifica(0));


//topico5

function somaDosAngulos(a, b, c) {
  let somaDosAngulos = a + b + c;

  if (somaDosAngulos >= 180) {
    return "Sim é um triangulo";
  } else if (a < 0 || b < 0 || c < 0) {
    return "Opção invalida";
  } else {
    return "Não é um triangulo";
  }
}

console.log(somaDosAngulos(60,-60,60))