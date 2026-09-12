// let dateNow = new Date();
// console.log(dateNow)
// console.log(Date.now())
// task1
let birthDate = new Date("January 20, 2002");
let now = new Date();
let difference = now.getTime() - birthDate.getTime();
let seconds = difference / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = months / 12;

console.log(`${Math.floor(seconds)} Seconds`);
console.log(`${Math.floor(minutes)} Minutes`);
console.log(`${Math.floor(hours)} Hours`);
console.log(`${Math.floor(days)} Days`);
console.log(`${Math.floor(months)} Months`);
console.log(`${Math.floor(years)} Years`);
// task2
let date = new Date("January 1, 1970 00:00:00");

date.setFullYear(date.getFullYear() + 10);

date.setSeconds(date.getSeconds() + 1);

console.log(date);
// task3
let date1 = new Date();

let lastDay = new Date(
    date1.getFullYear(),
    date1.getMonth(), 0);
console.log(lastDay);
console.log(`Previous Month Is ${lastDay.toLocaleString({ month: "long" })} And Last Day Is ${lastDay.getDate()}`);

// task4
let date2 = new Date("October 25 1982");
console.log(date2);
// 2
let date3 = new Date(1982, 9, 25);
console.log(date3);
// 3
let date4 = new Date();
date4.setFullYear(1982, 9, 25);
date4.setHours(0, 0, 0, 0);
console.log(date4);
// task5
let start = performance.now();
for (let i = 1; i <= 99999; i++) {
}
let end = performance.now();
console.log(`Loop Took ${Math.floor(end - start)} Milliseconds.`);
// task6
function* gen() {
    let num = 14;
    let num1 = 140;
    while (true) {
        yield num;
        num = num + num1;
        num1 = num1 + 200
    }
}
let generator = gen();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// task7

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {
    yield* [...new Set([...genNumbers()])];
    yield* [...new Set([...genLetters()])];
}
let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}
// task8
// import calc from "./mod-one.js";
// import { modOne } from "./mod-two.js";

// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));