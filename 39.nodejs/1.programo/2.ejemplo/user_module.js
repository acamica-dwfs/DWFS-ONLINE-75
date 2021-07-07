class User {
    
    nombre = 'Juan';
    apellido = 'Perez';
    email = 'jperez@hotmail.com';
    telefono = '(5411) 4574-2299';
    
    fullname = function(){
        return this.nombre + ' ' + this.apellido;
    }

}
//Exporto la  clase User
module.exports = User; 