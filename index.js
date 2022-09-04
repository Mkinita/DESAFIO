import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();

db.authenticate()
    .then (() => console.log('Base de datos conectada'))
    .catch (error => console.log(error));

const port = process.env.PORT || 4000;

app.set('view engine','pug');

app.use(express.static('public'));

app.use((req, res, next) =>{
    res.locals.unaVariable ='Una Nueva Variable';

    const year = new Date ();
    res.locals.Actualyear = year.getFullYear();
    res.locals.nombresitio = "DESAFIO";
    next();
});


app.use('/', express.urlencoded({extended: true}));


app.use('/', router);


app.listen(port,()=>{
    console.log(`El sirvisor esta funcionando en el puerto ${port}`)
})

app.use(express.urlencoded({extended:true}));
