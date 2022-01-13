// primeira parte
////////////////////////////////////////////

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

////////////////////////////////////////////////
// segunda parte
///////////////////////////////////////////////

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const criaObj = (obj, key, value) => {

  let newKey = key;
  const keyy = value;
  obj[newKey] = keyy;

  return console.log(obj)
}

criaObj(customer, 'lastName', 'Ferreira')
criaObj(customer, 'fullName', `${customer.firstName} ${customer.lastName}`)