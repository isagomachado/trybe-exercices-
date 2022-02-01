const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 18 },
  { name: 'Cláudia', age: 18 },
  { name: 'Bruna', age: 18 },
];

const verifyAges = (arr, minimumAge) => arr.every((item) => item.age >= minimumAge)

console.log(verifyAges(people, 18));