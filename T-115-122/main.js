// task1
let myNumbers = [1, 2, 3, 4, 5];
let [a, , , , b] = myNumbers
console.log(a * b); // Output: 5

// task2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [o, h, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${o}, ${h}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// task3

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let friends = arr3.slice(1).concat(arr1[0]);
let [K, Z, J] = friends;
console.log(`My Best Friends: ${K}, ${Z}, ${J}`);
// task4

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};
const { age: x, working: w, country: m, hobbies: [h1, , h3] } = member;

console.log(`My Age Is ${x} And Iam ${w ? "" : "Not"} Working`);
console.log(`I Live in ${m}`);
console.log(`My Hobbies: ${h1} And ${h3}`);
// task5

const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};
const { title: t, developer: v } = game;

const k = "Oath In Felghana";
const [u, j] = game.releases[k];

const i = "Ark Of Napishtim";
const { US: u_price, JAP: j_price } = game.releases[i];

const { Origin: or } = game.releases;

console.log(`My Favourite Games Style Is ${t} Style`);
console.log(`And I Love ${v} Games`);
console.log(`My Best Release Is ${k} It Released in ${u} & ${j}`);
console.log(`Although I Love ${i}`);
console.log(`${i} Price in USA Is ${u_price}`);
console.log(`${i} Price in Japan Is ${j_price}`);
console.log(`Origin Price Is ${or}`);
// // task6

let chosen = 1;
let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const [{ title, age, available, skills }] = myFriends.slice(chosen - 1, chosen);

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skills[1]);