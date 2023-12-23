
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('123');
        //resolve('success'); //성공값을 여기에 넣는다.
        reject(new Error('no network'));    //실패값 혹은 실패 이유를 여기에 넣는다.
        //reject('test');
    })

})

promise.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})