// Primeira parte

let tasksList = ["Tomar café", "Reunião", "brincar com o cachorro"];
console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1]
console.log(searchForLastTask)

tasksList.push("Fazer exercícios da Trybe")
console.log(tasksList)

tasksList.unshift("Sair da cama")
console.log(tasksList)

tasksList.pop()
console.log(tasksList)

let indexOfTask = tasksList.indexOf("Reunião")
console.log(indexOfTask)

// Segunda Parte

//1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);

//2

let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

//3

menu.push("Contato")
console.log(menu)