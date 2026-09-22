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
const tableBody = document.querySelector("tbody");
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
    .then((Response) => Response.json())
    .then((date) => {
        const repos = date.slice(0, 15);
        repos.forEach((repo) => {
            tableBody.innerHTML += `
        <tr>
        <td>${repo.name}</td>
        <td>${repo.stargazers_count}</td>
        <td>
<a href="${repo.html_url}" target="_blank">Visit Link</a>
        </td>
        </tr>
        `
        })

    });
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
//  task39
let myData2 = ["Osama", "Mohamed", "Elsayed", "Elzero"];

Object.preventExtensions(myData2);
try {
    myData2.push("Name");
} catch (error) {
}
console.log(myData2);
//  task38
let str = "i lovE elzeRO weB schOOL";

let result = str.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
console.log(result);
// task37
let numOne = 100;
let numTwo = 200;
let result1 = numOne > numTwo
    ? "1st > 2nd"
    : numOne < numTwo
        ? "1st < 2nd"
        : "1st = 2nd";

console.log(result1);
//  task36
let smallLetters = "";

for (let i = 97; i <= 122; i++) {
    smallLetters += String.fromCharCode(i);
}
console.log(smallLetters);
//  task35
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let serial = "";

for (let i = 0; i < 20; i++) {
    serial += chars.charAt(Math.floor(Math.random() * chars.length));
}
// console.log(smallLetters);
console.log(serial);
//  task34
let arr = [1, 1, 1, 2, 3, 4, 3];
let uniqueElements = [...new Set(arr)];
// 2
let uniqueElements1 = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
});
arr.forEach(function (element) {
    if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
    }
});
let uniqueElements2 = arr.reduce((acc, element) => {
    if (!acc.includes(element)) {
        acc.push(element);
    }

    return acc;
}, []);

console.log(uniqueElements); // [1, 2, 3, 4]
console.log(uniqueElements); // [1, 2, 3, 4]
console.log(uniqueElements1); // [1, 2, 3, 4]
console.log(uniqueElements2); // [1, 2, 3, 4]
//  task33
console.log("%cElzero Web School", "background-color: blue; color: white; padding: 20px;");
//  task32
let strNumber = "10";
//  1
console.log(strNumber * 1);
console.log(strNumber - 0);
// 2
console.log(Number(strNumber));
//3
console.log(parseInt(strNumber));
//4
console.log(parseFloat(strNumber));
//5
console.log(+strNumber);
//6
console.log(~~strNumber);
// 7
console.log(Math.floor(strNumber));
//  task31
let myArray = [100, 200, 300, 400];

// 1
let clonedArray1 = [...myArray];

//  2
let clonedArray2 = myArray.slice();

// 3
let clonedArray3 = [].concat(myArray);

// 4
let clonedArray4 = Array.from(myArray);

//  5
let clonedArra5y = Object.assign([], myArray);

// 6
let clonedArray6 = myArray.map(function (element) {
    return element;
});

//7
let clonedArray7 = myArray.filter(function () {
    return true;
});

//8
let clonedArray8 = [];
myArray.forEach(function (element) {
    clonedArray8.push(element);
});

//9
let clonedArray9 = JSON.parse(JSON.stringify(myArray));
// task30
for (let i = 1; i < 100; i += 5) {
    if (i % 10 === 1) {
        console.log(i)
    }
}
// task29
function customCalc(...Numbers) {
    let nums = Numbers.filter((num) => !isNaN(Number(num))).map(Number);
    let sum = nums.reduce((acc, num) => acc + num, 0);
    return sum * nums[0] * nums[nums.length - 1]
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10
// task28
function customMerge(...arrays) {
    let result = [];
    arrays.forEach(function (arr) {
        arr.forEach(function (element) {
            result.push(Number(element))
        });
    });
    // دي بترتب الأرقام من الأصغر للأكبر.
    return result.sort((a, b) => a - b);
}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// task27
let myArr = ["69", "108", "122", "101", "114", "111"];
let result2 = myArr.map(function (num3) {
    // تحوّل الكود  للحرف الموجود في الـ Unicode 
    return String.fromCharCode(num3);
}).join("")

console.log(result2); // Elzero
// task26
let myArr1 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// 2
let result3 = []
myArr1.forEach(function (element) {
    if (!result3.includes(element)) {
        result3.push(element)
    }
})
// 3
console.log(myArr1.filter((element, index) => {
    // هات العنصر لو دي أول مرة يظهر فيه
    return myArr1.indexOf(element) === index
}));
// 4
console.log(myArr1.reduce(function (acc, element) {
    if (!acc.includes(element)) {
        acc.push(element)
    }
    return acc;
}, []));
console.log(result3)
console.log([...new Set(myArr1)]);
// task25
let myArr2 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr2.length = 0
console.log(myArr2)
// 2
myArr2.splice(0, myArr2.length);
console.log(myArr2)
// 3
while (myArr2.length > 0) {
    myArr2.pop();
}
console.log(myArr2)
// 4
while (myArr2.length > 0) {
    myArr2.shift();
}
console.log(myArr2)
// task24
function dashBetweenOdd(num) {
    let numString = String(num);
    let result4 = "";
    for (let i = 0; i < numString.length - 1; i++) {
        result4 += numString[i];
        if (
            Number(numString[i]) % 2 !== 0 &&
            Number(numString[i + 1]) % 2 !== 0
        ) {
            result4 += "-";
        }
    }
    result4 += numString[numString.length - 1];
    return result4;
}
console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
// task23
function reversing(str) {
    return str.replace(/[a-z]+/gi, function (word) {
        return word.split("").reverse().join("");
    });
}
console.log(reversing(",@Hello, E\\@lzero"));
// task22
let str1 = "AElzero";
let str2 = "ZAcademy";

console.log(str1.slice(1) + String.fromCharCode(32) + str2.slice(1));
//  str1.substring(1) + String.fromCharCode(32) + str2.substring(1)
// task21
function getLastDigit(num) {
    return num % 10;
}
console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number
// task20
let st = "Elzero";
console.log(st[st.length - 1]);
console.log(st.charAt(st.length - 1));
console.log(st.slice(-1));
console.log(st.substring(st.length - 1));
console.log(st.substr(-1));
console.log([...st].pop());
console.log(st.split("").pop());
// task19
let st1 = "Web SchoolElzero ";
console.log(st1.slice(-7, -1) + " " + st1.slice(-18, -7));
// task18
let st3 = "elzero";
//1
console.log(st3[0].toUpperCase() + st3.slice(1));
//2
console.log(st3.charAt(0).toUpperCase() + st3.slice(1));
//3
console.log(st3.substring(0, 1).toUpperCase() + st3.substring(1));
// 4
console.log(st3.replace(st[0], st3[0].toUpperCase()));
//5
console.log(st3.replace(/^./, st3[0].toUpperCase()));
//6
console.log(st3.split("").map((char, index) => index === 0 ? char.toUpperCase() : char).join(""));
// 7
console.log(st3[0].toUpperCase().concat(st3.slice(1)));
// task17
function formatName(theName) {

    let words = theName.split(" ");

    let letters = words.map(function (word, index) {
        return index === 0
            ? word[0].toUpperCase()
            : word[0].toLowerCase();
    });
    return letters.join(".");
}
console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
// task16
function getCharacters(word, nums) {
    let first = word.slice(0, nums);
    let last = word.slice(-nums);
    return first + last
}
console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool
// task15
function concatenateWithoutLast(words) {
    let result4 = words.map(function (word) {
        return word.slice(0, -1)
    });
    return result4.join(" ");
}
console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"]));
// task14
function repeatWithRules(word) {
    let result5 = word.split("").map(function (char, index) {
        return char.repeat(index + 1);
    });
    return result5.join("")
}
console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
// task13
let theName = "Elzero";
console.log(theName[0] + theName[theName.length - 1]);
console.log(theName.slice(1, -1));
console.log(theName.slice(2, 4));
// task12
let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result5 = [];
names.forEach(function (name) {
    if (
        name[0].toLowerCase() ===
        name[name.length - 1].toLowerCase()
    ) {
        result5.push(name);
    }
});
console.log(result5); // ['Osso', 'Aola', 'Daad', 'Roor']
// task11
let myMoney = 5301503206;
let money = myMoney.toString();
console.log(money.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
// task10
String.prototype.elzeroRepeat = function (num) {
    return this.repeat(num);
};
console.log("Elzero".elzeroRepeat(3));
// task9
function swapEveryTwoChars(word) {
    let result6 = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            result6 += word[i] === word[i].toUpperCase()
                ? word[i].toLowerCase()
                : word[i].toUpperCase()
        } else {
            result6 += word[i]
        }
    }
    return result6;
}
console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
// task8
let nums = [10, 80, 85, 25, 30, 88, 15];

let goal = 100;

let closest = Infinity;
let closestNum = 0;

for (let i = 0; i < nums.length; i++) {

    let difference = Math.abs(nums[i] - goal);

    if (difference < closest) {
        closest = difference;
        closestNum = nums[i];
    }
}
console.log(closestNum);
// task7
let nums2 = [20, 100, 50, 10, 15, -20, 30];
nums2.sort(function (a, b) {
    return b - a;
});
console.log(nums2.slice(0, 2));
// task6
function checkBiggestNum(word) {
    return Math.max(...word.split(""));
}
console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9
// task5
