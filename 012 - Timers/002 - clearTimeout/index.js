// OBS: tempo em milisegundos

const timer = setTimeout(()=>{
    console.log("Meu timer foi iniciado");
}, 1000);

console.log("Meu console");
clearTimeout(timer);