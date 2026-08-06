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
