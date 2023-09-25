// JavaScript is a single thread language 
// that means only one statement can be process over the time
// single thread => it means synchronous => JavaScript is Synchronous and not Asynchronous
// single thread => it meant it has only one call-stack and one memory-heap

// if javascript is single thread then how does it deal with long time task ?
// javascripts is single thread and has only one call-stack but the Async task will be
// javascript runtime responsibility so what I mean by javascript run time?
// for example when ever settimeout will go to call-stack cuz this is something that takes long time
// the javascript runtime will take care of it and it will be removed from call stack
// and the call stack will be continue to finish the code and the run time will raise event and that event
// will go to Event Loop (Callback Queue) and when the call-stack was empty the call-back will be added to call-stack

//example
console.log(1)
setTimeout(()=>{console.log(2)},0) // this will be removed imaidately from call stack cuz call-stack don't know how to deal with it
                                   // the runtime will tack care of it and will add the call back to call-stack
console.log(3)

// result =>
// 1
// 3
// 2

// so the javascript engine is something different from javascript runtime
// the browser has javascipt run time and also node js has javascipt run time