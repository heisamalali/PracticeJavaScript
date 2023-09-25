// why the result is 3 2 1
setTimeout(() => {
    console.log(1)
}, 0);
Promise.resolve('hi').then(()=>{console.log(2)})
console.log(3)