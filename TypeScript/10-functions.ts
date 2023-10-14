function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(3, 5));

function addNumbers2(a: number): number | undefined {
  if (a === 0) {
    return undefined;
  }
  return a * 2;
}

// anonymous function

let z = function (): void {
  console.log("this is from z");
};

let w: (a: number, b: number) => number = function (a, b) {
  return a - b;
};

// arrow function
let d = (a: number, b: number): number => {
  return a + b;
};

let e = (a: number, b: number): number => a + b;

let f: (a: number, b: number) => number = (a, b) => a + b;

type ThirdFn = () => void;
type SecondFn = () => ThirdFn;
type FirstFn = () => SecondFn;

const variableFn: SecondFn = () => {
  return () => console.log("thisrd fn");
};
