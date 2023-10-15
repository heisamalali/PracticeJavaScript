class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
  price: number;
  constructor(price: number) {
    this.price = price;
  }

  getPrtice() {
    return this.price;
  }
}

class Pride extends Product {
  name: string;
  constructor(name: string, price: number) {
    super(price);
    this.name = name;
  }

  getName() {
    return this.name;
  }
  getAnotherPrice() {
    return super.price;
  }

  override getPrtice(): number {
    return super.price;
  }
}
