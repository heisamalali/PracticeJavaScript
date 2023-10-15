"use strict";
const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};
for (const key in object) {
    console.log(key);
    // console.log(object[key]);
}
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
Object.entries(object).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
});
