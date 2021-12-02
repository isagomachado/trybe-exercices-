//exercicio1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: "Tio Patinhas",
  origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

let mensagem = "Bem-vinda, " + info.personagem;
console.log(mensagem);

//exercicio2

info.recorrente = "sim";

console.log(info);

//exercicio3

for (let key in info){
  console.log(key)
};

//exercicio4

for (let key in info){
  console.log(info[key])
};

//exercicio5

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);

let lastMessage;

if (info.recorrente === "sim" && info2.recorrente === "sim");


console.log();
