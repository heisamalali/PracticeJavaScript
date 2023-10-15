"use strict";
const users = [];
// .length
console.log(users.length);
// .push(element) -> return new length this will add new element to the end of array
console.log(users.push({ name: "heisam" }));
//.pop() return removed element (undefiend if the array is empty) remove the element from the last
console.log(users.pop());
// .shift() -> remove the first element from the array and return if (return undefiend if the array was empty)
console.log(users.shift());
// .unshift(element) -> it will add one or more elements to the begining of array and return new length
console.log(users.unshift({ name: "heisam" }, { name: "heysam" }));
// .toString() -> return a string with comma-seperated values but it will not work with array of objects
console.log([1, 4, 5].toString());
console.log([1, 4, 6].join("*"));
// this is atupple it means we can not add to it and this will happen by adding readonly if we do not addreadonly then .push can be accessable
const nums = ["Hello", 5];
const [mystring, mynumber] = nums;
console.log(mystring, mynumber);
const shoppingCart = {
    cartItems: [],
    addItemToCart(newCartItem) {
        this.cartItems.push(newCartItem);
    },
    // I set price here cux we do not have id
    // splice method will get start and how many to remove
    removeFromCart(id) {
        for (const [key, cartItem] of this.cartItems.entries()) {
            if (cartItem.price === id) {
                this.cartItems.splice(key, 1);
                return;
            }
        }
    },
    clearCart() {
        this.cartItems = [];
    },
};
// this ... allows us to send as many items as we want to the function
function sum(...numbers) {
    let result = 0;
    numbers.forEach((n, i, a) => {
        result += n;
    });
    return result;
}
console.log(sum(1, 2, 5));
const numbers = [5, 7, 8];
const numbersTwo = [9, 10, 20, 7];
const concatNumbers = [...numbers, ...numbersTwo];
console.log(concatNumbers);
console.log(numbers.concat(numbersTwo));
