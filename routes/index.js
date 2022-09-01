import express from 'express'
import { paginaInicio } from '../controllers/paginasControllers.js'

const router = express.Router();


router.get('/inicio',paginaInicio);

router.get('/Categoria', (req, res) =>{
    res.render('categoria');
});


export default router;