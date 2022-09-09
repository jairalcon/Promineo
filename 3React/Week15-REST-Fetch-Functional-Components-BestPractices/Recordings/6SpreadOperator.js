/* spread though parameters */
function doSomething(a, b, c) {
    console.log(a, b, c)
}

let array = [5, 6, 7]

doSomething(...array);

let obj1 = {
    name: '01',
    value1: 1,
    value2: 2
}
/* use spread operator to grab object and rename value */
let clone = { ...obj1, name: '02' };

console.log(clone);