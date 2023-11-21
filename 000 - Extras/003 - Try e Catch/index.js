const bugNum = () => {

    try {
        const number = '123';


        if (number === 123) {
            return "seu numero é 123 - Type Number";
        }

        throw new Error("Deu ruim");

    } catch (error) {
           return error;//NÂO TRAVA A APLICAÇÃO
           //throw  Error(error); //TRAVA A APLICAÇÃO
    }
}

console.log(bugNum());
console.log("Continua executando");