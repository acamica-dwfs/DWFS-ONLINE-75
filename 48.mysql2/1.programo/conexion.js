const Sequelize = require('sequelize');
const path = 'mysql://user_resto:qwerty1234@localhost:3306/resto';
const sequelize = new Sequelize(path, {
    logging: true
});

sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
});

module.exports = sequelize;
