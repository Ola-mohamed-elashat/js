// task1
let element = document.getElementById("elzero");
console.log(element);
let elementByClass = document.getElementsByClassName("element")[0];
console.log(elementByClass);
let elementByTag = document.getElementsByTagName("div")[0];
console.log(elementByTag);
let elementByName = document.getElementsByName("js")[0];
console.log(elementByName);
let eleymentByQuer = document.querySelector("#elzero");
console.log(eleymentByQuer);
let elementByClass1 = document.querySelector(".element");
console.log(elementByClass1);
let elementByTag1 = document.querySelector("div");
console.log(elementByTag1);
let elementByAttribute = document.querySelector('[name="js"]');
console.log(elementByAttribute);
let allById = document.querySelectorAll("#elzero")[0];
console.log(allById);
let allByClass = document.querySelectorAll(".element")[0];
console.log(allByClass);
let allByTag = document.querySelectorAll("div")[0];
console.log(allByTag);
let allByAttribute = document.querySelectorAll('[name="js"]')[0];
console.log(allByAttribute);
let elementByChildren = document.body.children[0];
console.log(elementByChildren);
let firstChild = document.body.firstElementChild;
console.log(firstChild);
let lastChild = document.querySelector("body > div");
console.log(lastChild);
let elementByChildNodes = document.body.childNodes[1];
console.log(elementByChildNodes);
// task2
let images = document.getElementsByTagName("img");


for (let i = 0; i < images.length; i++){
images[i].src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
images[i].alt = "Elzero Logo";
images[i].style.backgroundColor = "red";
 console.log(images[i]);
}
// 2
// const imagefor = document.querySelectorAll('img');
// // console.log(images1);
// // console.log(imagefor);
// imagefor.forEach(element => {
//     console.log("ele", element);
//     element.src = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png'
//     element.alt = 'Elzero logo'
// });
// task3
let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

input.oninput = function () {
  result.textContent = `${input.value} USD Dollar = ${(input.value * 50.89).toFixed(2)} Egyptian Pound`;
};
// task4
let one = document.querySelector(".one")
let two = document.querySelector(".two")
// console.log(one.textContent);
// console.log(two.textContent);
let temp = one.textContent
// console.log(temp);
one.textContent = two.textContent
//  console.log(one.textContent);
 two.textContent = temp
 let tempTitle = one.title 
 one.title = two.title;
 two.title = tempTitle;
//  console.log(two.className);
two.textContent += [one, two].length;
// task5
let images1 = document.querySelectorAll(".test-images1 img");

for (let i = 0; i < images1.length; i++) {
  if (images1[i].hasAttribute("alt")) {
    images1[i].alt = "Old";
  } else {
    images1[i].alt = "Elzero New";
  }
}
// task6
let forms = document.querySelectorAll("form");

let form = forms[1];

let number = form.querySelector("[name='elements']");
let text = form.querySelector("[name='texts']");
let type = form.querySelector("[name='type']");
let results = form.querySelector(".results");

form.onsubmit = function (e) {
    e.preventDefault();

    results.innerHTML = "";

    for (let i = 1; i <= Number(number.value); i++) {

        let element = document.createElement(type.value);

        element.className = "box";
        element.title = "Element";
        element.id = `id-${i}`;
        element.textContent = text.value;

        results.appendChild(element);
    }
};