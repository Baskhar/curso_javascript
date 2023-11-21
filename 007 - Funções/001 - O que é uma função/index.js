
// 1 - Functions declaration
function isValidDeclaration() {
    const soma = 1 + 2;
    if (soma === 3) {
        return true;
    }
    return soma;
}

console.log(isValidDeclaration());
// 2 - Functions expression

const isValidExpression = function () {
    return false;
}
console.log(isValidExpression());
// 3 - Arrow Functions
const isValidArrow = () => 2 * 2;
const isValidArrow2 = () => {
    const multiplicacao = 2 * 2;
    return multiplicacao;
}
console.log(isValidArrow());
console.log(isValidArrow2());