// // task2
// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector(".current");
// let result = document.querySelector(".classes-list div");

// function showClasses() {
//     result.innerHTML = "";
//     let classes = Array.from(current.classList);
//     classes.sort();
//     if (classes.length === 0) 
//         {
//         result.textContent = "No Classes To Show";
//         return;
//     }
//     classes.forEach(function (className) {
//         let span = document.createElement("span");
//         span.textContent = className;
//         result.appendChild(span);
//     })
// }
// add.onblur = function () {
//     if (add.value.trim() !== "") {
//         let classes = add.value.toLowerCase().trim().split(" ");
//         current.classList.add(...classes);
//         add.value = "";
//         showClasses();
//     }
// };
// remove.onblur = function () {
//     if (remove.value.trim() !== "") {
//         let classes = remove.value.toLowerCase().trim().split(" ");
//         classes.forEach(function (className) {
//             current.classList.remove(className);
//         });
//         remove.value = "";
//         showClasses();
//     }
// };
// showClasses();
// // task3
// let element = document.querySelector(".our-element");
// let paragraph = document.querySelector("p");
// paragraph.remove();
// let start = document.createElement("div");
// start.className = "start";
// start.title = "Start Element";
// start.dataset.value = "Start";
// start.textContent = "Start";

// element.before(start);

// let end = document.createElement("div");
// end.className = "end";
// end.title = "End Element";
// end.dataset.value = "End";
// end.textContent = "End";

// element.after(end);
// // task4
// let div = document.querySelector(".elzero-text");

// console.log(div.lastChild.textContent.trim());
// // task5
// let elements = document.querySelector(".elements");

// elements.querySelectorAll("div, span, p, article, section").forEach(function (element) {
//     element.onclick = function () {
//         console.log(`This Is ${element.tagName}`);
//     };
// });
// Challenge
document.body.style.cssText = "maring: 0 padding: 0 background-color: rgb(236, 236, 236); font-family: Tahoma, Arial, sans-serif;";
let header = document.createElement("header");
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: white;";
let logo = document.createElement("div");
logo.textContent = "Elzero";
logo.style.cssText = "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
let menu = document.createElement("ul");
menu.style.cssText = "padding: 0; margin: 0; list-style: none; display: flex;";
let menuLinks = ["Home", "About", "Service", "Contact"];
menuLinks.forEach((linkText) => {
    let li = document.createElement("li");
    li.textContent = linkText;
    li.style.cssText = "margin-left: 15px; color: #666; font-size: 16px;";
    menu.appendChild(li);
});
header.appendChild(logo);
header.appendChild(menu);
document.body.appendChild(header);
let content = document.createElement("div");
content.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";
for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.style.cssText = "background-color: white; padding: 20px; border-radius: 6px; text-align: center; box-sizing: border-box;";
    let span = document.createElement("span");
    span.textContent = i;
    span.style.cssText = "font-size: 40px; color: black; display: block; margin-bottom: 10px;";
    let text = document.createTextNode("Product");
    product.appendChild(span);
    product.appendChild(text);
    product.style.cssText = "#888";
    product.style.fontSize = "14px"
    content.appendChild(product)
}
document.body.appendChild(content);
let footer = document.createElement("footer");
footer.textContent = "Copyright 2026";
footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: white;";

document.body.appendChild(footer);