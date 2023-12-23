
const promise = new Promise((resolve, reject) => {

    console.log('test');

    setTimeout(() => {
        console.log('123');
        resolve('success');
    })

})

let test2 = '100abc';
console.log(test2);

console.log(promise);

promise.then(value => {
    console.log(value);
})