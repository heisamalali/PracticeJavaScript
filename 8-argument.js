// in each function execution context we have access to arguents
function marry(...args){
    console.log(arguments)
    console.log(args)
}

marry('person1','person2')