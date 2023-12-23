
let test = 'value';
console.log(test);

let test2 = '123';
console.log(test2);

setTimeout(()=> {
    test2 = 100;
    console.log(test2);
}, 1000);

console.log(test2);

let test3 = 'abc';
console.log(test3);
