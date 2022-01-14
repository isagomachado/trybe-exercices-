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


