
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allInformations = {...user, ...jobInfos}; //guarda o novo objeto com todas as informações 

// console.log(allInformations)

const printPhrase = ({name, age, nationality, profession, squad, squadInitials}) => {
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I workas a ${profession} and my squad is ${squadInitials}-${squad}`)
};

printPhrase(allInformations)
