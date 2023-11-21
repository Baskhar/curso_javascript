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
        return reject(` Promise 3`);
    }, 1000);
});


Promise.allSettled([promese1,promese2,promese3]).then((res)=>{
    console.log(res);
    res.forEach(item =>{
if(item.status === 'fulfilled'){
    console.log(item.value);
}else if(item.status == 'rejected'){
    console.log(item.reason);
}
    });
   
});