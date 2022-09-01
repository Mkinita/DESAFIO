import sequelize from "sequelize";
import db from '../config/db.js'


export const Categoria = db.define(`hola`,{
    name:{
        type: sequelize.STRING
    },
});
