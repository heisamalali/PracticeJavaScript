"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
const person = new Person("heisam", 32);
const heisamAge = person.getAge();
console.log(heisamAge);
class Product {
    constructor(price) {
        this.price = price;
    }
    getPrtice() {
        return this.price;
    }
}
class Pride extends Product {
    constructor(name, price) {
        super(price);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getAnotherPrice() {
        return super.price;
    }
    getPrtice() {
        return super.price;
    }
}
