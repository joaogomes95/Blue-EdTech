// Soma

const soma = (num1,num2) => num1 + num2;

// Subtração

const sub = (num1,num2) => num1 - num2;

// Multiplicação para

const multi = (num1,num2) => num1 * num2;

// Divisão

const divisao = (num1,num2) => num1 / num2;

console.log(soma(2,5))
console.log(sub(5,2))
console.log(multi(2,5))
console.log(divisao(2,5))


module.exports = {
    soma,
    sub,
    multi,
    divisao,
}