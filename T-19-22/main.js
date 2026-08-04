

// task1
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); 
// task2
console.log(num + num);

console.log(num - -num);

console.log(num * (true + true));

console.log(num + (num / num + num / num + num / num));

console.log(num * (true + true + false));

console.log(num * +true + num * +true);
// task3
let num = "10";

console.log(+num + +num);

console.log(-(-num - num));

console.log(+num * (true + true));

console.log(+num + Number(num));

console.log(parseInt(num) + parseInt(num));
// task4
let points = 10;
points++;
points++;
points++;

console.log(points); // 13
points--;
points--;
points--;
points--;
points--;

console.log(points); // 8
// Challenge
[++a]

Value = 11

Explain =
// Pre Increment يزيد قيمة a أولًا من 10 إلى 11،
// ثم يستخدم القيمة الجديدة في العملية.

// Final Value of a = 11
[+b++]

Value = 20

// Explain =
// Unary Plus يحول String إلى Number.
// ثم Post Increment يزيد قيمة b بعد استخدامها.

// Final Value of b = 21
[+c++]

Value = 80

// Explain =
// الـ Unary Plus ليس له أي تأثير لأن c أصلًا من نوع Number.
// ثم الـ Post Increment يستخدم القيمة الحالية أولًا وهي 80،
// وبعد استخدامها يزيد قيمة c بمقدار 1.

// Final Value of c = 81
[+a++]

Value = 11

// Explain =
// الـ Unary Plus ليس له أي تأثير لأن a أصلًا Number.
// ثم Post Increment يستخدم القيمة الحالية أولًا وهي 11،
// وبعد استخدامها يزيد قيمة a بمقدار 1.

// Final Value of a = 12
a = 12
b = 21
c = 81
// السطر التاني 
[++a]

Value = 13

// Explain =
// Pre Increment يزيد قيمة a أولًا من 12 إلى 13،
// ثم يستخدم القيمة الجديدة.

// Final Value of a = 13
[-b]

// Value = -21

// Explain =
// Unary Negation يحول قيمة b إلى قيمة سالبة.
// ولا يغير قيمة المتغير.

// Final Value of b = 21
// [+c++]

// Value = 81

// Explain =
// علامة (+) ليس لها أي تأثير لأن c أصلًا من نوع Number.
// ثم c++ تستخدم القيمة الحالية أولًا وهي 81،
// وبعد استخدامها تزيد قيمة c بمقدار 1.

// Final Value of c = 82
// [- -a++]

// Value = 13

// Explain =
// أولًا a++ تستخدم القيمة الحالية وهي 13،
// ثم تزيد قيمة a إلى 14.
// بعد ذلك أول علامة (-) تجعل القيمة سالبة (-13)،
// ثم علامة الطرح الثانية تحول السالب إلى موجب.

// Final Value of a = 14
// [+a]

// Value = 14

// Explain =
// علامة (+) ليس لها أي تأثير لأن a أصلًا من نوع Number.
// لذلك يتم استخدام القيمة كما هي.

// Final Value of a = 14
// // السطر التالت
// [--c]

// Value = 81

// Explain =
// Pre Decrement يقلل قيمة c أولًا من 82 إلى 81،
// ثم يستخدم القيمة الجديدة.

// Final Value of c = 81
// [+b]

// Value = 21

// Explain =
// علامة (+) ليس لها أي تأثير لأن b أصلًا من نوع Number.
// لذلك يتم استخدام القيمة كما هي.

// Final Value of b = 21
// [--a]

Value = 13

// Explain =
// Pre Decrement يقلل قيمة a أولًا من 14 إلى 13،
// ثم يستخدم القيمة الجديدة.

// Final Value of a = 13
// [--a]

// Value = 12

// Explain =
// Pre Decrement يقلل قيمة a أولًا من 13 إلى 12،
// ثم يستخدم القيمة الجديدة.

// Final Value of a = 12
[+true]

Value = 1

// Explain =
// Unary Plus يحول القيمة Boolean إلى Number.
// true تتحول إلى 1.

// Final Value = 1
// challenge 2
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); 

console.log(-d + ++e * ++g + ++f);