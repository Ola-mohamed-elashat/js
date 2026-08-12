// task1
function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`hello Miss ${theName}`)
    } else {
        console.log(`Hello ${theName}`)
    }
}
sayHello("Osama", "Male"); // Hello Mr Osama
sayHello("Eman", "Female"); // Hello Miss Eman
sayHello("Sameh");// "Hello Sameh"
// task2

function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log("second Number Not found");
    } else if (operation === "add") {
        console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
        console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
        console.log(firstNum * secondNum);
    } else {
        console.log(firstNum + secondNum);
    }
};
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// // // task3
function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
        console.log("Age Out Of Range");
    } else {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 52} Weeks`);
        console.log(`${theAge * 365} Day`);
        console.log(`${theAge * 365 * 24} Hours`);
        console.log(`${theAge * 365 * 24 * 60} Minutes`);
        console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`);
    }
}
ageInTime(100); // Age Out Of Range
ageInTime(24); // Months Example => 456 Months
// task4
function checkStatus(a, b, c) {
    let name;
    let age;
    let status;
    if (typeof a === "string") {
        name = a;
    } else if (typeof a === "number") {
        age = a;
    } else {
        status = a;
    }
    if (typeof b === "string") {
        name = b;
    } else if (typeof b === "number") {
        age = b;
    } else {
        status = b;
    }
    if (typeof c === "string") {
        name = c;
    } else if (typeof c === "number") {
        age = c;
    } else {
        status = c;
    }
    if (status === true) {
        console.log(`Hello ${name}, Your Age Is ${age},You Are Available For Hire`);
    } else {
        console.log(`Hello ${name}, Your Age Is ${age},You Are Available For Hire`);
    }
}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");
checkStatus(false, "Osama", 38);

//task5
function createSelectBox(startYear, endYear) {
  let select = document.createElement("select");
  for (let Year = startYear; Year <= endYear; Year++){
    let option = document.createElement("option");
option.textContent = Year;
select.appendChild(option);

  }
  document.body.appendChild(select);
}
createSelectBox(2002, 2026);
//task6
function multiply() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      result = result * Math.trunc(arguments[i]);
    }
  }
  return result;
}
console.log(multiply(10, 20));//200
console.log(multiply("A", 10, 30));//300
console.log(multiply(100.5, 10, "B"));//1000
// Challenge t-57-63
function showDetails(a, b, c) {
let name;
let age;
let status;
for (let i = 0; i< arguments.length; i++){
    switch(typeof arguments[i]){
        case"string":
        name = arguments[i];
        break;

         case"number":
        age = arguments[i];
        break;

         case"boolean":
        status = arguments[i];
        break;

    }
}
  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? "Available" : "Not Available"
    } For Hire`
  );
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38);

//  64-70 task1
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let name1 = zName.split(" ");
        return `${name1[0]} ${name1[1] ? name1[1][0]?.toUpperCase() : ''}.`;
    }
    function ageWithMessage(zAge) {
        let age = parseInt(zAge);
        return `Your Age Is ${age}`;
    }
    function countryTwoLetters(zCountry) {
        let Country = zCountry.slice(0, 2).toUpperCase();
        return `You Live In ${Country}`;
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)},${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails()
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed", "24 Is The Age", "Syria"));
//  task2
const itsMe = () => {
    return `Iam A Normal Function`

};
  console.log(itsMe());
const urlCreate =(protocol, web, tld) =>{
    return`${protocol}://www.${web}.${tld}`;
}
 console.log(urlCreate("https","elzero","org"));
//  task3
const checker =(zName) => {
     return(status) =>{
    return (salary)=>{
  return status === "Available" 
  ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
};
};
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")());
 // task4
console.log(specialMix("10Test", "Testing", "20Cool"));

function specialMix(...data) {
let result1 =0;
let hasNumber = false;
for (let i = 0; i< data.length; ++i){
    if(typeof data[i] === "number"){
        result1 += data[i];
        hasNumber = true;
    }else if(typeof data[i] === "string"){
        let number = parseInt(data[i]);
        if(!isNaN(number)){
            result1 += number;
            hasNumber =true;
        }
    }
}
return hasNumber ? result1: "All Is Strings";
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//Challenge70
let names = function(...names){
    return`[${names.join("], [")}] => Done!`;
};
console.log(names("Osama","Mohmed","Ali","Ibrahim"));
// Arrow
let names2 =(...names2) =>{
    return`[${names2.join("], [")}] => Done!`;
};
console.log(names2("Osama","Mohmed","Ali","Ibrahim"));
// Challenge2
let myNumbers2 =[20, 50, 10, 60];
let [first, second, third] = myNumbers2;
let calc = function  (one, two, ...nums){
return one + two + +nums;
};
console.log(calc(third, first, second));
// Arrow2
let myNumbers3 = [20, 50, 10, 60];

 let [first1, second1, third1] = myNumbers3;

 let calc1 = (one, two, ...nums) => one + two + +nums; 

 console.log(calc1(third1, first1, second1));
function sayWelcome(name){
    return `hello ${name}` 
}
// console.log(sayWelcome("ola"))
// function sum(num1, num2) {
// return(num1+ num2)
// }
// console.log(sum(10, 20));
// function checkAge (age){
//     if(age >=18){
//         return"Adult"
//     }else{
//            return"Young"
//     }
// }
// console.log(checkAge(20));
// console.log(checkAge(15));

// function getFirstName(fullName){
// return fullName.split(" ")[0];
// }
// console.log(getFirstName("Ola Mohamed"));