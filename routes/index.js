import express from "express";
import { paginaInicio,paginaProducto,paginaCategoria } from "../controllers/paginasControllers.js";

const router = express.Router();

router.get('/inicio',paginaInicio);

router.get('/producto',paginaProducto);

router.get('/categoria',paginaCategoria);

export default router;