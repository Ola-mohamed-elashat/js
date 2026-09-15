
// task2
let num = new XMLHttpRequest();
num.open("get", "articles.json");
num.send();
num.onload = function () {
    if (num.status === 200) {
        let data = JSON.parse(num.responseText);
        console.log(data)
        console.log("Data Loaded")
    }
}
// task3
let num1 = new XMLHttpRequest();
num1.open("get", "articles.json");
num1.send();
num1.onload = function () {
    if (num1.status === 200) {

        let mainData = JSON.parse(num1.responseText);

        mainData.forEach(function (article) {
            article.category = "All";
        });

        console.log(mainData);
// task4
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);

        let dataDiv = document.getElementById("data");

        mainData.forEach(function (article) {
            dataDiv.innerHTML += `
                <div>
                    <h2>${article.title}</h2>
                    <p>${article.body}</p>
                    <p>Author: ${article.author}</p>
                    <p>Category: ${article.category}</p>
                </div>
            `;
        });
    }
};