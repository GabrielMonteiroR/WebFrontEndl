//Crie uma função que receba dois números como parâmetros, some esses números e retorne o resultado.
//Crie uma função que receba um número e retorne se ele é par ou ímpar
//Crie um objeto representando uma pessoa com nome e idade, e exiba essas informações.

function sumTwoNumbers(n1, n2) {
    return n1 + n2
}

function itsEven(number) {
    return number % 2 === 0
}

function createObject(name, age) {
    return obj = {
        name: name,
        age: age
    }
}

console.log(sumTwoNumbers(4, 5))
console.log(itsEven(3))
console.log(createObject("Exemplo", 21))
