const express = require("express");
const compression = require('compression');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contactos');

app.use(express.json());
app.use(compression());

//  log  para ver los datos que llegan al servidor o app
const middleLog = (err, req, res, next) => {
    console.log(
        req.method +
        " - " +
        req.path +
        " - " +
        JSON.stringify(req.query) +
        " - " +
        JSON.stringify(req.body)
    );

    if(err) {
        return res.status(500).json({message: "Error inesperado"});
    }

    next();
};
app.use(middleLog);

app.use('/', indexRouter);
app.use('/personas', contactsRouter);


app.listen(port, () => {
    console.log("Servidor iniciado en el puerto: " + port);
});
