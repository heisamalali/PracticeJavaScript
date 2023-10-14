// Immediately Invoked Function Experession
(function () {
  console.log("hello");
})();

// what is the usage of this IIFE
// well for assining the result of function imediatly we can use them

var myApp = (() => {
  return {
    a: "heisam",
    b: () => {
      console.log("this is from b");
    },
  };
})();
