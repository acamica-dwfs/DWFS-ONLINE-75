const User = require('./user_module.js');  //  importacion del modulo  o libreria
const person = new User(); //  declaro el objeto

//Inprimo objeto completo
console.log(person);

//Imprimo propiedad
console.log(person.nombre);
console.log(person.telefono);

//Ejecuto metodo
console.log(person.fullname());
