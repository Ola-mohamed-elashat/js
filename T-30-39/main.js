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
// task2
let num4 = 9;
let str = "9";
let str2 = "20";

if (num4 == str) {
console.log(`${num4} Is The Same Value As ${str}`);
}
if (num4 == str && typeof num4 !== typeof str) {
 console.log(num4, "Is The Same Value As", str, "But Not The Same Type");
}

if (num4 != str2 && typeof num4 !== typeof str2) {
 console.log(num4, "Is Not The Same Value", "Or The Same Type As", str2);
}

if (str != str2 && typeof str == typeof str2) {
 console.log(str, "Is The Same Type As", str2, "But Not The Same Value");
}

// task3
let num9 = 10;
let num10 = 30;
let num12 = "30";

if (
  num3 > num9 &&
  typeof num3 !== typeof num10 &&
  num12 == num10 &&
  num12 !== num9
) {
  console.log(
    `${num3} Is Larger Than ${num9} And Type ${typeof num12} Not The Same Type As ${typeof num9}`
  );

  console.log(
    `${num12} Is Larger Than ${num9} And Value Is The Same As ${num10} And Type ${typeof num12} Not The Same Type As ${typeof num10}`
  );

  console.log(
    `${num12} Value And Type Is Not The Same As ${num9} And Type Is Not The Same As ${num10}`
  );
}
// task4
let num5 = 10;
let num6 = 5;
let num7 = 10;
let num8 = 36;

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

if ((num5 + num6) < num8) {
  console.log("True");
} else {
  console.log("False");
}

if ((num5 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

if ((num5 + num6 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}
// task5
let day = "   monday  ";


day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch (day){
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
}
//  Challenge37
// let o = 10;
// if (4 < 10 ){
// console.log(10)
// else if  (o >= 10 && o <= 40){
// console.log("10 To 40");
// }
// else if (o > 40){
// console.log ("> 40");
// }else{
//   console.log("unknown")
// }
// }
