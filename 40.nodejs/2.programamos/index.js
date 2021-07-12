//usamos  moment
const moment = require('moment');
//fecha actual
const now = moment(new Date());
//fecha utc
const utc = moment(new Date()).utc();

//Muestro ambas fechas
console.log(now.format('DD MM YYYY hh:mm:ss'));
console.log(utc.format('DD MM YYYY hh:mm:ss'));


var duration = moment(utc.diff(now));
//Calculamos la diferencia en horas
console.log('Cantidad de horas '+duration.hours());

//Comparar 2 fechas
var fecha1 = '1979-06-10';
var fecha2 = '1929-06-15';

//hacemos uso de isBefore de moment para compar las fechas

if (moment(fecha1).isBefore(fecha2)){
    console.log('La fecha2 '+fecha2+' es mayor que la fecha1 '+fecha1);
}else{
    console.log('La fecha1 ' + fecha1 + ' es mayor que la fecha2 ' + fecha2);
}
