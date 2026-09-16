// function num(e){
//     e.target.style.color ="red";
// }
// let p = document.querySelector(".test");
// p.addEventListener("click",num)
// task1
const myData = [
    {
        "userId": 10,
        "title": "Article Title Number 1",
        "description": "Article Description Number 1"
    },
    {
        "userId": 5,
        "title": "Article Title Number 2",
        "description": "Article Description Number 2"
    },
    {
        "userId": 5,
        "title": "Article Title Number 3",
        "description": "Article Description Number 3"
    },
    {
        "userId": 5,
        "title": "Article Title Number 4",
        "description": "Article Description Number 4"
    },
    {
        "userId": 5,
        "title": "Article Title Number 5",
        "description": "Article Description Number 5"
    },
    {
        "userId": 5,
        "title": "Article Title Number 6",
        "description": "Article Description Number 6"
    },
    {
        "userId": 25,
        "title": "Article Title Number 7",
        "description": "Article Description Number 7"
    },
    {
        "userId": 25,
        "title": "Article Title Number 8",
        "description": "Article Description Number 8"
    },
    {
        "userId": 15,
        "title": "Article Title Number 9",
        "description": "Article Description Number 9"
    },
    {
        "userId": 15,
        "title": "Article Title Number 10",
        "description": "Article Description Number 10"
    }
]
const myPromise = new Promise((resolve, reject) => {
    resolve(myData);

});
const dataDiv = document.getElementById("data");
myPromise.then((data) => {
    const num = data.slice(0, 5);
    num.forEach((article) => {
        dataDiv.innerHTML += `
<div>
<h2>${article.title}</h2>
<p>${article.description}</p>
</div>
   `;
    });

});
// task2
fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const num = data.slice(0, 5);
    num.forEach((article) => {
        dataDiv.innerHTML += `
<div>
<h2>${article.title}</h2>
<p>${article.description}</p>
</div>
   `;
    });
    });