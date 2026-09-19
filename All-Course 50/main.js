// task50
function createStars(num) {
    for (let i = 0; i < num + num; i++) {
        if (i < num) {
            let stars = num * 2 - 1 - (2 * i);
            console.log(" ".repeat(i) + "*".repeat(stars));
        } else {
            let stars = 2 * (i - num) + 1
            let stars1 = num * 2 - i - 1;
            console.log(" ".repeat(stars1) + "*".repeat(stars));
        }
    }
}
createStars(6);
// task49
function createStars1(num1) {
    let result = "";
    for (let i = 0; i < num1 * 2 - 1; i++) {
        let stars2;

        if (i < num1) {
            stars2 = 2 * i + 1;

        } else {
            stars2 = 2 * (num1 * 2 - i - 2) + 1;
        }
        result += "*".repeat(stars2) + "\n";
    }
    return result;
}
console.log(createStars1(3));
console.log(createStars1(7));
// task48
function createStars2(num2) {
    let result = "";

    for (let i = 0; i < num2; i++) {
        result += "*".repeat(i * 2 + 1) + "\n";
    }
    return result
}
console.log(createStars2(8));
// task47
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    // فبتعمل من الكلام ده بيانات على شكل ملف. 
    const blob = new Blob([textarea.value], { type: "text/plain" });

    const link = document.createElement("a");
    // خد الملف اللي عملناه، واديله رابط أقدر أتعامل معاه.
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";

    link.click();
    // مش محتاجين الرابط ده خلاص، امسحه من الذاكرة.
    URL.revokeObjectURL(link.href);
});
// task46
let numss = [10, -20, 300, 50, 100, -50];
let maxNumber = Math.max(...numss);
// 2
numss.sort((a, b) => b - a);
let maxNumber1 = numss[0];
// 3
let maxNumber2 = numss[0];

for (let i = 1; i < numss.length; i++) {
    if (numss[i] > maxNumber2) {
        maxNumber2 = numss[i];
        // 4

        let maxNumber3 = numss.reduce((max, current) => {
            return current > max ? current : max;
        });
    }
}
console.log(maxNumber);
console.log(maxNumber2);
console.log(maxNumber);
console.log(maxNumber1);
// task45
let rangeEnd = 10;
// index → مكان العنصر وده اللي محتاجينه 
// _  العنصر نفسه ومش محتاجينه
let myRange = new Array(rangeEnd).fill(0).map((_, index) => index + 1);
// 2
let myRange1 = [...Array(rangeEnd).keys()].map(num => num + 1);
// 3
let myRange2 = []
for (let i = 1; i <= rangeEnd; i++) {
    myRange2.push(i)
}
console.log(myRange)
console.log(myRange1)
console.log(myRange2)
//  task44
let last = 30;
let sum = 0;
for (let i = 29; i >= 1; i -= 4) {
    console.log(i);
    sum += i;
}
console.log(sum);
//  task43
const tableBody =document.querySelector("tbody");
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
.then((Response) => Response.json())
.then((date) =>{
    const repos = date.slice(0, 15);
    repos.forEach((repo) =>{
        tableBody.innerHTML +=`
        <tr>
        <td>${repo.name}</td>
        <td>${repo.stargazers_count}</td>
        <td>
<a href="${repo.html_url}" target="_blank">Visit Link</a>
        </td>
        </tr>
        `
    })
     
})
//  task42
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.altKey && event.shiftKey) {
        console.log("You Pressed Ctrl + Alt + Shift");
    }
});
// task41
const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// 1
let cloned = { ...myData };

// 2
let cloned1 = Object.assign({}, myData);

// 3
let cloned2 = Object.fromEntries(Object.entries(myData));

// 4
let cloned3 = JSON.parse(JSON.stringify(myData));

console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned1); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned2); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned3); // {user: 'Elzero', age: 41, country: 'Egypt'}
// task40
const myData1 = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};
Object.preventExtensions(myData);
myData.skill = "Programming";

console.log(myData1.user); // Elzero
console.log(myData1.age); // 41
console.log(myData1.country); // Egypt
console.log(myData1.skill); // undefined