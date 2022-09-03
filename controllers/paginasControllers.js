import {Producto} from '../Models/Producto.js'
import {Categoria} from '../Models/Categoria.js'
import { name } from 'pug/lib/index.js';

const paginaInicio = (req, res) => {
    res.render('inicio',{
    pagina:'inicio'
    });
}

const paginaProducto = async (req, res)  => {

    const product  =  await Producto.findAll() ;
    
    // console.log(product);
    res.render('producto',{
        pagina:'producto',
        product,
        });
}


const paginaCategoria = async (req, res) => {

    const cate = await Categoria.findAll();
    
    // console.log(cate)

    res.render('categoria',{
        pagina:'categoria',
        cate,
        });
}

const paginaProductoCategoria = async (req, res) =>{
    // console.log(req.params)
    const {pro} = req.params;

    try {
        const resultadodos = await Producto.findOne({where:{name:pro} });
        res.render('detallecategoria', {
            pagina:'informaciones',
            resultadodos
            
        })
    } catch (error) {
       console.log(error);
    }
}
const paginaObtenerCategoriaProducto = async (req,res) =>{
   
        const resultado = await Producto.findAll({
            where: {
                categoty:req.params.prod
            }
        })

        res.send(req.params.prod);    
}






export {
    paginaInicio, 
    paginaProducto, 
    paginaCategoria,
    // paginaDetalleCategoria,
    paginaProductoCategoria,
    paginaObtenerCategoriaProducto
}
