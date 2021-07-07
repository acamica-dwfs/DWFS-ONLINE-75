const calc = require('./caculadora');
const fs = require('fs');
const calcu = new calc();

const a = 32;
const b = 13;

console.log('sumar');
console.log(calcu.suma(a, b));


console.log('resta');
console.log(calcu.resta(a, b));


console.log('multiplicación');
console.log(calcu.multi(a, b));


console.log('División');
console.log(calcu.div(a, b));


fs.writeFile('result.txt', `La suma es : \n ${a} + ${b} = ${calcu.suma(a, b)} \n \n`, ()=>{
    console.log('esta es la suma');
} )

const fileAppen = (operación, resultado)=>{
    fs.appendFile('result.txt', `La ${operación} es : ${resultado}`, ()=>{
        console.log('esta es la resta');
    } )
}

fileAppen('suma', `\n ${a} + ${b} = ${calcu.suma(a, b)} \n \n`);
fileAppen('resta', `\n ${a} - ${b} = ${calcu.resta(a, b)} \n \n`);
fileAppen('multiplicación', `\n ${a} * ${b} = ${calcu.multi(a, b)} \n \n`);
fileAppen('división', `\n ${a} / ${b} = ${calcu.div(a, b)} \n \n`);