class Superclass {
  public isSuper: boolean
  
  constructor() {
    this.isSuper = true;
  }


  public sayHello() {
    console.log('Olá mundo!')
  }
};

class Subclass extends Superclass {
  constructor(){
    super();
    this.isSuper = false
  }
}

function myFunc(newObject: Superclass) {
  if (newObject.isSuper === true) {
    console.log('Super!')
  } else {
    console.log('Sub!')
  }
}

const classe1 = new Superclass();
const classe2 = new Subclass();

classe1.sayHello()
classe2.sayHello()

myFunc(classe1);
myFunc(classe2)