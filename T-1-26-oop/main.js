// task1
class car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    console.log("Car Is Running Now")
  }
  stop() {
    console.log("Car Is Stopped")
  }
}
let carOne = new car("mg", 2022, 420000);
let carTwo = new car("bmw", 2023, 420000);
let carThree = new car("toyota", 2024, 420000);


console.log(`Car One Name Is ${carOne.n} And Model Is${carOne.m} And Price Is${carOne.p} `);
console.log(`Car One Name Is ${carTwo.n} And Model Is${carTwo.m} And Price Is${carTwo.p} `);
console.log(`Car One Name Is ${carThree.n} And Model Is${carThree.m} And Price Is${carThree.p} `);

carOne.run();
carTwo.stop();
console.log(carOne.run());



// class Person{
//   constructor (name, age, job){
//     this.m = name
//     this.a = age
//     this.j = job
//   }
//   introduce(){
//     console.log("My Name Is Ola And I Am 24 Years Old")
//   }
//   work(){
//     console.log("I Am Working As A Developer")
//   }
// }
// let Person1 = new Person ("ola", 24, "Frontend");
// let Person2 = new Person ("mohamed", 20, "Backend");
// let Person3 = new Person ("ahmed", 22, "FullStack");

// console.log(`My Name Is ${Person1.m} And I Am ${Person1.a} I Am Working As A Developer ${Person1.j} `);
// console.log(`My Name Is ${Person2.m} And I Am ${Person2.a} I Am Working As A Developer ${Person2.j} `);
// console.log(`My Name Is ${Person3.m} And I Am ${Person3.a} I Am Working As A Developer ${Person3.j} `);
// Person1.introduce();
// Person1.work();
// task2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
  }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
console.log(`${TabletTwo.fullDetails()}`);
console.log(`${TabletThree.fullDetails()}`);


// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Dog extends Animal {
//   constructor(name, age, type) {
//     super(name, age)
//     this.type = type || "Unknown"
//   }
//   details() {
//     return `${this.name} Age Is ${this.age} And Type Is ${this.type}`;
//   }
// }

// let cat = new Dog("Cat", 10, "Persian");
// let Lion = new Dog("Lion", 3, "Wild");
// let Elephant = new Dog("Elephant", 2);

// console.log(`${cat.details()}`);
// console.log(`${Lion.details()}`);
// console.log(`${Elephant.details()}`);
// task3
class User {
  constructor(username, card) {
    this.u = username;
    this._c = card;
  }
  get showData() {
    let card = String(this._c).replace(/\D/g, "");
    card = card.match(/.{1,4}/g).join("-");
    return `Hello ${this.u} Your Credit Card Number Is ${card}`
  }
}
let userOne = new User("Ola", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
console.log(userTwo.showData);
console.log(userThree.showData);
console.log(userOne.c);
// class Product {
//     constructor(name, price, code) {
//         this.name = name;
//         this.price = price;
//         this._code = code;
//     }
//      get getData() {
//         let code = String(this._code).replace(/\D/g, "");
//         code = code.match(/.{1,4}/g).join("-")
//         return`Product ${this.name}Has Code ${code}`
//     }
// }
// let productOne = new Product("Laptop", 50000, "1234-5678-9012");
// let productTwo = new Product("Phone", 20000, "123456789012");
// let productThree = new Product("Tablet", 15000, "1234-56789012");

// console.log(productOne.getData);
// console.log(productTwo.getData);
// console.log(productThree.getData);

// console.log(productOne.code);
// task4
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};
let myStr = "Elzero";

console.log(myStr.addLove());
// String.prototype.addWelcome = function () {
// return `Welcome ${this}`
// };
// let myName = "ola";
// console.log(myName.addWelcome());
// task5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperty(myObj, "score", {
  writable: false
});

Object.defineProperty(myObj, "id", {
  enumerable: false
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}
console.log(myObj);