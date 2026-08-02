
    //  task 1 
let numberOne = 10;
let numberTwo = 20;

console.log ("" + numberOne + numberTwo);
console.log(typeof numberOne);
console.log(typeof numberTwo);
console.log ( typeof ("" + numberOne + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log (numberOne ,numberTwo);
console.log (numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`); 
// task2
console.log("task two"); 
console.log(elzero.innerHTML); 
console.log(typeof elzero);
// task 3
console.log("task three"); 

console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n++ with ++\n\\\"\"\"\"\\\"\"\"\n\"\"javascipt\"\"``")

// task 
let a = 21;
let b = 20;
console.log("task four");
console.log(`${a}_${b}${a}_${b}${a}_${b}${a}_${b}`);
// challenge
title = "Elzero";
description = "Elzero Web School";
date = "25/10";

let postTitle = "Elzero",
    postDescription = "Elzero Web School",
    postDate = "25/10";
    
  let card = `
  <div class="card">
    <h3>${postTitle}</h3>
    <p>${postDescription}</p>
    <span>${postDate}</span>
  </div>
`;
document.body.innerHTML = card.repeat(4);
