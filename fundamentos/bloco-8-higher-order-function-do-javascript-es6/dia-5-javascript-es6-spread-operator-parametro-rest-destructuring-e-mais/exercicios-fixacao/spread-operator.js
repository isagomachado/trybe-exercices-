// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'mamão', 'maçã'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  let newArray = [...fruit, ...additional]

  return newArray
};

console.log(fruitSalad(specialFruit, additionalItens));