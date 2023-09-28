let obj = {
    a : 'a',
    b : 'b',
    c : {
        deep : 'try and copy me'
    }
}

let shadowClone1 = Object.assign({},obj)
let shadowClone2 = {...obj}
let deepClone = JSON.parse(JSON.stringify(obj))

obj.a = 5
obj.c.deep = 'hahaha'
console.log(obj)
console.log(shadowClone1)
console.log(shadowClone2)
console.log(deepClone)