const calc = require('./calculator');
const calculadora =  new calc();

const A = 1;
const B = 5;

console.log("sumar");
console.log(calculadora.sumar(A, B))

console.log("restar");
console.log(calculadora.restar(A, B));

console.log("multiplicar");
console.log(calculadora.restar(A, B));

console.log("dividir");
console.log(calculadora.div(A, B));


