function imprimirMensagem(i) {
    console.log(`Eu te amo ${i} vezes Karina!!!`);
    
    if (i < 100) {
        setTimeout(function () {
            imprimirMensagem(i + 1);
        }, 1000); // Atraso de 1 segundo (1000 milissegundos)
    }
}

imprimirMensagem(1);
