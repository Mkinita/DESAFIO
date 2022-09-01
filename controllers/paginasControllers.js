import { Categoria } from '../models/Categoria.js'

const paginaInicio = async (req, res) =>{
    
    const cat = await Categoria.findAll();
    console.log(cat);

    res.render('inicio',{
        pagina: 'Inicio'
});
}

export{
    paginaInicio
}
