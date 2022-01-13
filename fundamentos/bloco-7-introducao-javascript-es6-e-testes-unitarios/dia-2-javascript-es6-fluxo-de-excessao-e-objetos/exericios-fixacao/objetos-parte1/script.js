// primeira parte
////////////////////////////////////////////

const customer1 = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

console.log(customer1);

customer1.lastName = "Faria";
console.log(customer1);

const customer2 = {
  firstName: "Maria",
  age: 23,
  job: "Medic",
};

console.log(customer2);
customer2["lastName"] = "Silva";
console.log(customer2);

////////////////////////////////////////////////
// segunda parte
///////////////////////////////////////////////

const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

const criaObj = (obj, key, value) => {
  let newKey = key;
  const keyy = value;
  obj[newKey] = keyy;

  return console.log(obj);
};

criaObj(customer, "lastName", "Ferreira");
criaObj(customer, "fullName", `${customer.firstName} ${customer.lastName}`);

////////////////////////////////////////////////////////////////
// Exercicio 3
////////////////////////////////////////////////////////////////

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

///////// função par mostrar as chaves do objeto/////////
const showKeys = (obj) => Object.keys(obj);

console.log(showKeys(student1));
console.log(showKeys(student2));


const skills = (student) => {
  const getSkill = Object.keys(student); // gera uma array com todas as chaves
  for (index in getSkill) {
    console.log(`${getSkill[index]}, Nível: ${student[getSkill[index]]}`);
  }
}


console.log('Estudante 1');
skills(student1);

console.log('Estudante 2');
skills(student2);


