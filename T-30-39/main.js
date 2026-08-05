// task1
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(-50 < -"-40"); // true
console.log(10 < -"-40"); // true
console.log("10" == 10); // true
console.log(20 != false); // true
// task2
let num1 = 10;
let num2 = 20;

console.log(num1 < num2);   // true
console.log(num2 > num1);   // true
console.log(num1 != num2);  // true
console.log(num1 !== num2); // true
console.log(num1 <= num2);  // true
console.log(num2 >= num1);  // true
// task3
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a >= b); // true
console.log(a < b > a <= c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && (a > c)); // true
// task 33 37
// task1
let num = 9;

if (num < 10) {
  console.log("00" + num);
}
let num22= 20;

if (num22>= 10 && num22< 100) {
  console.log("0" + num2)
}
let num3 = 110;

if (num3 >= 100) {
  console.log(num3);
}
task2
let num4 = 9;
let str = "9";
let str2 = "20";

if (num4 == str) {
console.log(`${num4} Is The Same Value As ${str}`);
}
if (num4 == str && typeof num4 !== typeof str) {
  console.log(`${num4} Is The Same Value As${str} But Not The Same Type`);
}

if (num4 != str2 && typeof num4 !== typeof str2) {
  console.log(`${num4} Is Not The Same Value Or The Same Type As ${str2}`);
}

if (str != str2 && typeof str == typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

// task3
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (
  num3 > num1 &&
  typeof num3 !== typeof num2 &&
  num3 == num2 &&
  num3 !== num1
) {
  console.log(
    `${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num1}`
  );

  console.log(
    `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`
  );

  console.log(
    `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
  );
}
// task4
// let num1 = 20;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;
// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }