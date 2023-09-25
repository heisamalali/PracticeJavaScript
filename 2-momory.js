// Call stack + Memory Heap
const number = 610; // allocate memory for number => this is will happen in Memory Heap
const string = 'some test' // allocate memory for number => this is will happen in Memory Heap
const human = {  // allocate memory for number => this is will happen in Memory Heap
    firstName : 'Heisam',
    lastName : 'Aleali'
}

function calculate() { // allocate memory for number => this is will happen in Memory Heap
    const sumTotal = 4 + 5 ;
    return sumTotal
}

calculate() // this will go to the top of call stack for runing and when ever it finished it will be removed from call stack

// call stack is first in last out 
// it is not 100 % thay every variable will be saved in MemoryHeap id dependes , but we can see that complex structurs
// will be saved in Memory Heap

// Memory Leak 
// 1)Global Variable : Defining a lots of Global Variable can cuz memory leak
var a = 1;
var b = 2;
var c = 3;

// 2)Event Listeners => addning event listeners and forgot to removing then can cuz to memory leak
var element = document.getElementById('button');
element.addEventListener('click',onclick);

// 3) setInterval => this also can end to memory leak . specially when we create some variables there.
