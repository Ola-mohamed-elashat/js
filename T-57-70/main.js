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
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// task3
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
// task5
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
// task6
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
