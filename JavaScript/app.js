function Person() {
  this.firstname = "Default";
  this.lastName = "Default";
}

Person.prototype.GetFullName = function () {
  return this.firstname + " " + this.lastName;
};

var heisam = new Person();
heisam.firstname = "Heisam";
heisam.lastName = "Aleali";

console.log(heisam.GetFullName());
