const express = require("express");
const app = express();

const indexRouter = require('./routes/index');
const phoneRouter = require('./routes/telefonos');

app.use(express.json());

app.use('/', indexRouter);
app.use('/telefonos', phoneRouter);

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

