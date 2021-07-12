/**
 npm init
 npm -v
 npm install [packete]
 npm install [packete] -g
 npm uninstall
 package.json
 dotenv
 Instalación global de nodemon
 console.log (process.env.USER_DB):
 */
require('dotenv').config()
console.log("hola mundo acamica,  dwfs 47");
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
console.log("variable de entorno : " + dbUser)
console.log("variable de entorno : " + dbPass)
