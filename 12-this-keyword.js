// this is the object that the function is property of

const obj = {
    name:'Heisam',
    sign(){
        console.log('lalala' + this.name)
    }
}

obj.sign();