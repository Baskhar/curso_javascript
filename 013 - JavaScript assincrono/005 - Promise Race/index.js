const promese1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(` Promise 1`);
    }, 3000);
});

const promese2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(` Promise 2`);
    }, 4000);
});

const promese3 = new Promise((resolve, reject) => {
    setTimeout(() => {
       // return reject(` Promise 3`);
        return resolve(` Promise 3`);
    }, 1000);
});


// promese1.then((res)=>{
// console.log(res);
// });

// promese2.then((res)=>{
//     console.log(res);
// });

// promese3.then((res)=>{
//     console.log(res);
// });


Promise.race([
    promese1,promese2,promese3,
]).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});