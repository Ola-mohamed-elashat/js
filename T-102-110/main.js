// task1
// let numbers = prompt("Print Number From - To", "Example: 5-20");
// let nums = numbers.split("-");
// let nums1 = Number(nums[0]);
// let nums2 = Number(nums[1]);
// let start = Math.min(nums1, nums2)
// let end = Math.max(nums1, nums2)
// for (let i = start; i <= end; i++) {
//     let div = document.createElement("div");
//     div.textContent = i;
//     document.body.appendChild(div);
// }
// task2
function createPopup() {
    let popup = document.createElement("div");
    popup.className = "popup";
    let title = document.createElement("h2");
    title.textContent = "Welcome";
    let text = document.createElement("p");
    text.textContent = "Welcome To Elzero Web School";

    let close = document.createElement("span");
    close.textContent = "x";
    close.className = "close";

    popup.appendChild(title);
    popup.appendChild(text);
    popup.appendChild(close);
    document.body.appendChild(popup);
    close.onclick = function () {
        popup.remove();
    };

}
setTimeout(createPopup, 5000);
// task3 task4 ,5
let div = document.querySelector("div");

let number1 = Number(div.textContent);

let counter = setInterval(function () {
    number1--;

    div.textContent = number1;

    if (number1 === 5) {
        window.open("https://elzero.org", "_blank");
    }

    if (number1 === 0) {
        clearInterval(counter);
    }

}, 1000);
