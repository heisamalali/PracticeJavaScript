// it is about javascript engin it will allocate memory during the creation phase
// it will allocate memory for function and variables for the variable it will set them to undefiend
// the engin only will hosts var and function on creation phase so it will host (function ...) let or const
// the hoisting will happen in every execution context
console.log(sing());
console.log(teddy);
var teddy = "bear";
function sing() {
  console.log("ohhh la la la");
}
