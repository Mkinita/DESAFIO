import {Producto} from '../Models/Producto.js'
import {Categoria} from '../Models/Categoria.js'
import { belongsTo } from 'sequelize/types'



Categoria.belongsTo(Producto,{foreignKey : "categoty"});
Producto.hasMany(Categoria,{oreignKey : "id"})


export {
    Producto,
    Categoria
}