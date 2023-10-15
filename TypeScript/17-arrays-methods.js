"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const mynums = [1, 2, 3];
for (const number of mynums) {
    console.log(number);
}
function containes({ searchValue, arrayTosearch }) {
    for (const value of arrayTosearch) {
        if (value === searchValue)
            return true;
    }
    return false;
}
console.log(containes({ searchValue: 5, arrayTosearch: [1, 2, 5] }));
const students = [{ name: "heisam", lastName: "Alali", age: 32 }];
// the map method will return new array so it will not change the main arrary
const resultOfNewStudents = students.map((_a) => {
    var { age } = _a, rest = __rest(_a, ["age"]);
    return Object.assign(Object.assign({}, rest), { isAdult: age > 18 ? true : false });
});
console.log(resultOfNewStudents);
// the find method will return the first element that satisfy the condition
console.log(resultOfNewStudents.find((student) => student.isAdult));
// the filter method remove items that condition will be false and for condition true the element will be kept
console.log(resultOfNewStudents.filter((student) => student.isAdult));
// the every method is like the all method in c# it will check all element satisfy the condition
console.log(resultOfNewStudents.every((student) => student.isAdult));
// the some method is like any in c#
console.log(resultOfNewStudents.some((student) => student.isAdult));
// the reduce method will give us the ability to iterate between previous value and current value
// this will add the age of all students
console.log(students.reduce((accumulator, currentstudent) => {
    return accumulator + currentstudent.age;
}, 0));
const words = ["a", "ab", "abc", "abcd", "b", "c"];
const longestword = words.reduce((prev, next) => {
    return prev.length > next.length ? prev : next;
});
console.log(longestword);
