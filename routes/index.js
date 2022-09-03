import express from "express";
import { paginaInicio,
    paginaProducto,
    paginaCategoria ,
    // paginaDetalleCategoria,
    paginaProductoCategoria,
    paginaObtenerCategoriaProducto,
} from "../controllers/paginasControllers.js";
import { Producto } from "../Models/Producto.js";

const router = express.Router();

router.get('/inicio',paginaInicio);

router.get('/producto',paginaProducto);

router.get('/categoria',paginaCategoria);

// router.get('/categoria/:cat',paginaDetalleCategoria);

router.get('/producto/:pro',paginaProductoCategoria);


router.get('/productos/:prod',paginaObtenerCategoriaProducto);


export default router;