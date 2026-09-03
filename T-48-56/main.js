
// // task1
let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i<= end; i += start){
    if (i !== exclude){
        console.log(i)
    }
}
// // task2
let start1 = 10;
let end1 = 0;
let stop = 3;

for (let j = start1; j >= stop; --j){
    if(j < start1 ){
        console.log("0" + j);
    }else{
        console.log(j);
    }
}
// // task3
let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
    console.log(i);

    for (let j = breaker; j < end2; j += breaker) {
        console.log("-- " + j);
    }
}

// // task4
let index = 10;
let jump = 2;
for (;;) {
    console.log(index);
    index -= jump;

    if (index === jump) {
        break;
    }
}
// // task5
let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let count = 0;

for (let i = friends1.indexOf(friends1[0]); i < friends1.length; i++) {
  if (!friends1[i].toLowerCase().startsWith(letter)) {
    count++;
    console.log(`${count} => ${friends1[i]}`);
  }
}
// // task6
let start3 = 0;
let Name = "elZerO";

for (let i = start3; i < Name.length; i++) {
  if (Name[i] === Name[i].toUpperCase()) {
    Name[i] = Name[i].toLowerCase();
  } else {
    Name[i] = Name[i].toUpperCase();
  }
}

console.log(Name);
// task6
let start4 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start4; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}

console.log(result);
// task7
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = ++start5; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}
// task7
let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;
while (index1 < friends2.length) {
  if (typeof friends2[index1] === "string" && !friends2[index1].startsWith("A")) {
    counter++;
    console.log(`${counter} => ${friends2[index1]}`);
  }

  index1++;
}
// // Challenge56
let myAdmins = ["Ahmed", "Osama","Sayed", "Stop","Samera" ];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia" ,"Ola","Abdullah","ola"];

let position = 0;

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }

 position ++;
}

document.write(`<div>We Have ${position } Admins</div>`);
document.write(`<div>We Have X Admins</div>`);

for (let i = 0; i < position ; i++) {
  document.write(`<hr>`);
  document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members:</h3>`);

  let memberCounter = 0;

   for (let j = 0; j < myEmployees.length; j++) {
    if (
      myEmployees[j][0].toLowerCase() ===
      myAdmins[i][0].toLowerCase()
    ) {
      memberCounter++;

      document.write(
        `<p>- ${memberCounter} ${myEmployees[j]}</p>`
      );
    }
  }
}
