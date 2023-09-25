// there is lots of javascript engins 
// the javascript engine will get js file and translate it to computer so the computer can understand it
// Engin => 1) Parser => AST => Interpreter => Bytecode => 
//                                     ||
//                                       => Profiler => Compiler => OptimizedCode       
// Interpreter => very fast to start runing the code it will be line by line but there is no obtimization to get faster
// Compiler => not line by line , it needs to look over the code and make some optimization maybe so 
//             it is slower for start runung the code but when it compiled the code it may be faster than Interpreter
// ByteCode can not run by muchine it needs JavascriptEngin
const isHappy = true
console.log(isHappy)