let mynums =[1, 2, 3, 4, 5, 6];
let newarray = [];
for (let i = 0; i < mynums.length; i++){
    newarray.push(mynums[i] + mynums[i]);
}
console.log(newarray);

let addself = mynums.map((element, index, arr) => element + element);
console.log(addself);

let swappingCases = "elZerO";
let invertedNumber = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz12zer40";

let sw = swappingCases.split("").map(function(ele){
return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");

console.log(sw);

let inv = invertedNumber.map(function(ele){
    return -ele;
});
console.log(inv);

let ign = ignoreNumbers.split("").map(function(ele){
    return isNaN(ele) ? ele : "";
}
).join("");
console.log(ign); 


let mix = "a13bs2zx";
let mixedcontent = mix .split("").filter(function(ele){
    return !isNaN(parseInt(ele));
}) .map(function(ele){
    return ele*ele;
})
.join("");
console.log(mixedcontent)
//  task1
let mix1 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newArtay = mix1.map (function(ele){
    return isNaN(ele) ? ele : ""
});
console.log(newArtay );
let return1 = newArtay.reduce(function(acc, current){
return acc + current;
});
 console.log(return1);
//  task2
let myString1 = "EElllzzzzzzzeroo";

let newArray1 = myString1.split("").filter(function(ele, index ){
    return myString1.indexOf(ele) === index;
});
console.log(newArray1);
let return2 = newArray1.reduce(function(acc, current){
    return acc + current;
});
console.log(return2)
//  task3
let myArray3 = ["E", "l", "z", ["e", "r"], "o"];
let myArray4 = myArray3.reduce(function(acc, current){
    return acc.concat(current);
},[]);
console.log(myArray4);
let result3 = myArray4.reduce(function(acc,current){
return acc + current
});
console.log(result3);
//  task4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newArray5 = numsAndStrings
  .filter(function (ele) {
    return typeof ele === "number";
  })
  .map(function (ele) {
    return -ele;
  });

console.log(newArray5);
//  task5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, current) {
  if (current % 2 === 0) {
    return acc * current;
  } else {
    return acc + current;
  }
}, 1);

console.log(result);
let nums2 = [2, 12, 11, 5, 10, 1, 99];
let result5 = nums2.reduce((acc, current) =>
  current % 2 === 0 ? acc * current : acc + current
, 1);

console.log(result5);
let myString3 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString3
  .split("")
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  .filter(function (ele, index, arr) {
    return (
      isNaN(parseInt(ele))
      && ele !== ","
      && !ele.includes(arr[arr.length - true])
    );
  })
  .reduce(function (acc, current) {
    return acc === current ? acc : acc + current;
  });

console.log(solution);