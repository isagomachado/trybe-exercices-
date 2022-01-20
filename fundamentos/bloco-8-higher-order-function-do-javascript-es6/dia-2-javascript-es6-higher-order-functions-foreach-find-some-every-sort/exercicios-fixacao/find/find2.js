const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5 ? true : false

const useFind = names.find(findNameWithFiveLetters)


console.log(useFind);