const bugNum = ()=>{
    const number = '123';
    // debugger;
    console.log(number === 123);
    if(number === 123){
        return "seu numero é 123 - Type Number";
    }
    console.log(number);
    throw new Error( "Deu ruim");
}

console.log(bugNum());