/* Require */
const fs = require('fs');
const moment = require('moment');
const coolImages = require ("cool-images");
/* Require */

const imagen = coolImages.many(600, 800, 3);
const imagenOne = coolImages.many(600, 800, 1);
const time = moment().format('YYYY MMMM Do , h:mm:ss a');


fs.writeFile('log.txt', `${time} \n \n`, ()=>{
    console.log('se ha agregado correctamente');
});


const fileAppen = (dato)=>{
    fs.appendFile('log.txt', `${dato}`, ()=>{
        console.log('se ha agregado correctamente');
    });
};

imagen.forEach(url => fileAppen(`${url} \n \n`));
fileAppen(`${time} \n \n`);
fileAppen(`${imagenOne} \n \n`);



