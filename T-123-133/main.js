// task1
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers)
console.log([...setOfNumbers].pop());
// task2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());
// task3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let myMap = new Map(Object.entries(myInfo));
console.log(myMap)
console.log(myMap.size)
console.log(myMap.has("role"));
// task4
let theNumber = 100020003000;
console.log(Number([...new Set(theNumber.toString())].join("")));
console.log(Number([...new Set([...theNumber.toString()])].filter(Number).join("")));
// task5
let theName = "Elzero";
console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.values(theName));
console.log(Array.from(theName, function (letter) {
    return letter;
}));
// task6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.copyWithin(3, 0);
console.log(chars);

let chars1 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let numbers = chars1.filter((el) => typeof el === "number");
let letters = chars1.filter((el) => typeof el === "string");
let letters1 = letters.slice(0, numbers.length);
let result = [...letters1, ...letters];
console.log(result);

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
let numbers1 = chars3.filter((el) => typeof el === "number");
let letters2 = chars3.filter((el) => typeof el === "string");
let letters3 = letters2.slice(0, numbers1.length);
let result1 = [...letters3, ...letters2];
console.log(result1);


let chars4 = ["A", "B", "C", "D", "E", 10, 15, 6];

let numbers3 = chars4.splice(-3);

chars4.unshift(...numbers3);

console.log(chars4);

let chars5 = [10, 15, 6, "A", "B", "C", "D", "E"];
chars5.copyWithin(0, 3, 6);
console.log(chars5);
// task7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let result5 = numsOne.concat(numsTwo);
console.log(result5);

let result4 = [...numsOne, ...numsTwo];

console.log(result4);
let result3 = [...numsOne];

result3.push(...numsTwo);

console.log(result3);
// Challenge
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2)); // 7 * 30 = 210