const jwt =  require("jsonwebtoken")
// millave
const llave = "llavedeprueba"

// generar token
const json = {
    hola: "mundo",
    estado: true
}

const token = jwt.sign(json, llave)
console.error("token generado")
console.log(token)

console.log("decodificar token")
jwt.verify(token, llave, (error, decode)=> {
    if(error){
        console.log("ha ocurrido un eror")
    }
    console.log("mi json original")
    console.log(decode)
})