"use strict";
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5));
function addNumbers2(a) {
    if (a === 0) {
        return undefined;
    }
    return a * 2;
}
// anonymous function
let z = function () {
    console.log("this is from z");
};
let w = function (a, b) {
    return a - b;
};
// arrow function
let d = (a, b) => {
    return a + b;
};
let e = (a, b) => a + b;
let f = (a, b) => a + b;
const variableFn = () => {
    return () => console.log("thisrd fn");
};
