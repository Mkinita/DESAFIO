import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'


const app = express();

db.authenticate()
    .then (() => console.log('Base de datos conectada'))
    .catch (error => console.log(error));

const port = process.env.PORT || 4000;

app.set('view engine','pug');

app.use('/', router);


app.listen(port,()=>{
    console.log(`El sirvisor esta funcionando en el puerto ${port}`)
})