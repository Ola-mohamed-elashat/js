// task1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.slice(num - num, num));
console.log(myFriends.splice(num - num, num));
// task2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.splice(
  friends.length - friends.length, //=0
  friends.length / friends.length //1
);

friends.splice(
  friends.length - friends.length / friends.length, //0/1
  friends.length / friends.length //1
);

console.log(friends);
// task3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(arrOne.concat(arrTwo).sort().reverse())

// task4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words.pop()[0]
    .slice(words.length)
    .toUpperCase()
);
// task5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


if (haystack.includes(needle)) {
  console.log("Found");
}


if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

// task6
if (haystack.find(function (item) {
  return item === needle;
})) {
  console.log("Found");
}
// task6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = [
  ...arr2.slice(-"XX".length, -"X".length),
  ...arr1.slice(-"X".length),
  ...arr2.slice(-"X".length)
].join("").toLowerCase();

console.log(allArrs); // fxy
// Challenge

let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

counter++;

my = my.slice(zero, counter).reverse();

console.log(my);

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]
console.log(my.find(name => name.startsWith("El")).replace("ham", "zero"));
console.log(my.find(name => name.startsWith("Os")).split("").reverse().join("").replace("amasO", "rO"));