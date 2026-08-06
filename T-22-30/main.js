//    task 1 
console.log (1000000);
console.log (1_000_000);
console.log (1e6);
console.log (10**6);
console.log (1000000.0);
console.log (1000000/1);
console.log(5e4 + 5e4);
// task 2
console.log(Math.abs(Number.MIN_SAFE_INTEGER));
// task3
console.log(Number.MAX_SAFE_INTEGER.toString().length); 
// task4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
// task5
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// task6
let flt = 10.4;

console.log(parseInt(flt))// 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
// task7
console.log(Math.floor(Math.random() * 5));

// Challenge
let a =1_00;
let b =2_00.5;
let c =1e2;
let d =2.4;

console.log(Math.trunc(d));
console.log(Math.floor(d));
// task2
console.log(100**Math.round(2.4))
// task3
console.log(parseInt(2.4));
console.log(Math.floor(2.4));
console.log(Math.round(2.4));
console.log(Math.trunc(2.4));
// task4
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // "66.67"
console.log(Math.ceil(b / Math.ceil(d)));   // 67
// task1 27\30
let userName = "Elzero";
console.log(userName.charAt(3).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee
// task2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // true
console.log(word.startsWith(letterE.toUpperCase())); // true
console.log(word.endsWith(letterO.toLowerCase())); // true

//  Challenge30
let Z = "Elzero web school"

console.log(Z.charAt(3) + Z.slice(3, 6));
console.log(Z.charAt(13).repeat(8));
console.log(Z.slice(0, 6).split(" "));
console.log(`${Z.substr(0, 6)} ${Z.substr(11, 6)}`);
console.log(Z.charAt(0).toLowerCase() + Z.slice(1).toUpperCase());