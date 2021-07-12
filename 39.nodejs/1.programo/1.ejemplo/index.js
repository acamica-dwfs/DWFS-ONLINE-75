//Hola Mundo
console.log("Hola Mundo");


//Creamos un array de frutas
var Lang = ['Pera', 'Banana', 'Limones'];

//muestro las frutas
console.log(Lang);

///   forecha vs  map
console.log("con forEach")
let  prueba =  Lang.forEach( element => element + "2")
console.log(prueba)

//console.log("con map")
let elementos = Lang.map( element =>  element+ "1")
console.log(elementos)


console.log(elementos.length)

var found = Lang.find(element => element > 'Banana');
console.log(found);

const prueba_acamcia = () => {
    console.log(" prueba  acamica")
}

function  nodejs() {
    console.log( "soy una funcion")
}


prueba_acamcia()
nodejs()



