
//Promise를 생략해서 사용한다고 생각해야 이해하기 쉽다.
//return new Promise((resolve)); 를 생략한 것이 async 이다.
async function fetchUser() {
    return 'test';
}
const user = fetchUser();
user.then(value => {
    console.log(value);
});

console.log('========================');

function delay(ms) {
    return new Promise(resolve => {
        console.log(resolve);
        console.log('1왔따감');
        setTimeout(() => {
            resolve('2banana');
        }, ms);
    });
}

async function getApple() {

    //await를 사용하면 Promise에서 then의 결과를 변수에 담는다.
    let test = await delay(2000);

    console.log(test);

    //await를 사용하지 않을 경우, 기존처럼 then을 통해서 결과를 출력한다.
    delay(1000).then(value => {
        console.log('3');
        console.log(value);
    })

    return 'apple';
}


function pickFruits() {
    return getApple();
}

//getApple().then(console.log);
pickFruits().then(console.log);