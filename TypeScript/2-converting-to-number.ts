export {};
const str = "5";
const strToNumber = +str;
console.log(typeof str);
console.log(typeof strToNumber);
const number1 = parseInt(str);
console.log(number1);
const number2 = parseFloat(str);
console.log(number2);
const number3 = Number(str);
console.log(number3);
console.log(Number(false));
console.log(Number(true));

let number4 = 10;
number4 *= +"20";
console.log(number4);
