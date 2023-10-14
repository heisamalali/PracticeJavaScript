const user = {
  name: "Heisam",
  age: 32,
  "email-address": "h.a@gmail.com",
  printName() {
    //here this we refer to user
    console.log(this.name);
  },
  printAge: function () {
    //here this we refer to user
    console.log(this.age);
  },
  printFamily: () => {
    // this will not refer to user object here
    // this only happen in arrow functions
    console.log("");
  },
};
const myname = user.name;
