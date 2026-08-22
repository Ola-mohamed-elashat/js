// task1
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is${this.name}, My Age Is${this.age}, I Live in${this.country}`
  }
};
console.log(member.name);
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// task2
// let objMethodOne = {
//   property: "Method One"
// };

// console.log(objMethodOne.property);
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property);
// 2
let objMethodTwo = new Object()
objMethodTwo.property = "Method Two"
console.log(objMethodTwo.property);
// 3
let objMethodThree = Object.create(Object.prototype);
objMethodThree.property = "Method Three";
console.log(objMethodThree.property);
// 4
function myobject(property) {
  this.property = property;
}
let objMethodFour = new myobject("Method Four");

console.log(objMethodFour.property);
// task3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};
let finalObject = Object.assign({}, { a }, threeNums, twoNums);

console.log(finalObject);
// task4
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
let objectLength = Object.keys(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`)
  console.log(`The Price Is${myFavGames[Object.keys(myFavGames)[i]].price}`)
  if (
    myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")
  ) {
    console.log("- Game Has Releases")
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);

  }
  console.log("#".repeat(20));
}
