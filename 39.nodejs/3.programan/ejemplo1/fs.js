const fs = require('fs');
fs.writeFile('acamica.txt',"hola mundo",  () => {
    console.log(" archivo creado con contenido");
});

 fs.appendFile('acamica.txt'," \n " + 2,  () => {
     console.log(" concatenar");
 });


