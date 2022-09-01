import {Producto} from '../Models/Producto.js'
import {Categoria} from '../Models/Categoria.js'

const paginaInicio = (req, res) => {
    res.render('inicio',{
    pagina:'inicio'
    });
}

const paginaProducto = async (req, res)  => {

    const product  =  await Producto.findAll() ;
    
    console.log(product);
    res.render('producto',{
        pagina:'producto',
        product,
        });
}


const paginaCategoria = async (req, res) => {

    const cate = await Categoria.findAll();
    
    console.log(cate)

    res.render('categoria',{
        pagina:'categoria',
        cate,
        });
}




export {
    paginaInicio, paginaProducto, paginaCategoria
}
