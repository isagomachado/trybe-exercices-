let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let key in names) {
  let takename = names[key];
  let mensagem = "Olá " + takename;
  console.log(mensagem)
  
}
