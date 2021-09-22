// let searchTime = document.getElementById(`time`)
// function  getCurrentTimeString(){
//     return new Date().toTimeString().replace(/ .*/, ``)
// }
// setInterval(
//     () => searchTime.innerHTML = getCurrentTimeString(),1000
// )
//
// let searchShowSec = document.getElementById(`showSecond`)
// function getSecondsToTomorrow() {
//     let now = new Date();
//
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//
//     let diff = tomorrow - now;
//     return Math.round(diff/1000)}
//
// setInterval(
//         () => searchShowSec.innerHTML = getSecondsToTomorrow(),1000
//     )

let input = document.getElementById('time');
let show = document.getElementById('timer');

function sec() {
    let seconds = input.value
    const timer = setInterval(() => {
        seconds -= 1;
        if (seconds < 1) {
            show.innerHTML = 'Время истекло!';
            clearInterval(timer)
        } else {
            show.innerHTML = seconds;
        }
    }, 1000);
}

let textBefore = `The text before promise`
console.log(textBefore)

let textAfter = new Promise(function (resolve,reject){
    setTimeout(() => {
        resolve(textBefore = `The text after promise`)
    },3000)
})

textAfter.then(console.log)

// let numBefore = 2
// console.log(numBefore)
//
// let numAfter = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         reject(numBefore = 3)
//     },3000)
// })
//
// numAfter.then(function (){
//     console.log(numBefore)
// })

// let num = Math.floor(Math.random()*20)
//
// // console.log(num)
// function containPromise(){
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             reject({Error: `number more than 10 `})
//         } else {
//             resolve({Message: `number smaller than 10`})
//         }
//     })
// }
// containPromise()
//     .then(console.log)
//     .catch(console.log)

let numArray = [2,3,4,5,6,7,8,9]

function showEvenNumbers (){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            reject({newNumArray: numArray.filter(x => x%2 === 0)})
        },1000)
    })
}

function showSumNumbers (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({newNumArray: numArray.reduce((total, value)=>{
                return total+value
            },0)
        })
    },3000)
})

}
showEvenNumbers().catch(showSumNumbers).catch(console.log)

let arr = [2,3,4,5,6,7,8,9]

async function first(arr) {
    const arrPositiveNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arrPositiveNumbers.push(arr[i]);
        }
    }
    return arrPositiveNumbers

}
async function second(arrPositiveNumbers) {
    let sumNumbers = 0;
    for (let i = 0; i < arrPositiveNumbers.length; i++) {
        sumNumbers += arrPositiveNumbers[i];
    }
    return sumNumbers
}
async function func() {
    const firstRes = await first(arr);
    const result = await second(firstRes);
    console.log(result)
}()
go().then()

let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
})
promise.catch(console.log)

let promiseArray = Promise.all([
    new Promise(resolve => setTimeout(()=>resolve(3),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),2000)),
    new Promise(resolve => setTimeout(()=>resolve(1),1000))
])
let newPromiseArray = Promise.race([
    new Promise(resolve => setTimeout(()=>resolve(3),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),2000)),
    new Promise(resolve => setTimeout(()=>resolve(1),1000))
])

promiseArray
            .then(result => console.log(result))
newPromiseArray
            .then(result => console.log(result))
