type CallbackFn = (a: number, b: number) => number;

function isValid(a: number, b: number, callback: CallbackFn): boolean {
  return callback(a, b) > 10;
}
