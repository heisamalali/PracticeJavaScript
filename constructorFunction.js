function Person(firstname,lastName){
    this.firstname = firstname || "Default" 
    this.lastName = lastName || "Default"
}

Person.prototype.GetFullName = function(){
    return this.firstname + ' '+ this.lastName;
}

// this will make an object from person
var heisam = new Person('heisam');
var mohsen = new Person('mohsen', 'amiri')
heisam.firstname = 'Heisam';

console.log(heisam.GetFullName())
console.log(mohsen.GetFullName())