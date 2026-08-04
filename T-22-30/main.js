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
console.log(); // 10
// task7
console.log(Math.floor(Math.random() * 5));