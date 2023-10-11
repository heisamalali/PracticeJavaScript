const wizard = {
  name: "wizard",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "archer",
  health: 30,
};
// apply and call are the same the only thing that is different is that apply accept [] and call accept bunch of input
console.log("1", archer);
wizard.heal.apply(archer, [30, 50]);
console.log("2", archer);
wizard.heal.call(archer, 30, 50);
console.log("3", archer);

// bind does not execute the function but only create new function with the context we passed in
const archerHeal = wizard.heal.bind(archer, 30, 50);
archerHeal();
console.log("4", archer);

// bind have another usage which is called function currying
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
