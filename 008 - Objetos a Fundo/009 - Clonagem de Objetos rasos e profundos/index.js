let Tenis = {
    tamanho: 45,
    estoque: true,

};

let link = { link: { a: "a", b: { c: "c" } } };

function cloneObject(objc) {
    return JSON.parse(JSON.stringify(objc));
}

// let clone1 = JSON.stringify(Tenis);
// clone1 = JSON.parse(clone1);

let clone1 = cloneObject(Tenis);

//clone1.estoque = false;
//console.log(clone1.tamanho);


console.log(1,clone1);
console.log(2, Tenis);


let mesclar1 = Object.assign(cloneObject(Tenis), cloneObject(link));


//spread operator
let mesclar2 = { ...cloneObject(Tenis), ...cloneObject(link) };




clone1.estoque = false;
mesclar1.link.a = "ABC"; 
console.log(3,clone1);
console.log(4, Tenis);
console.log(5,mesclar1);
console.log(6,mesclar2);