import sequelize from "sequelize";
import db from '../config/db.js'


export const Categoria = db.define('category',{
    name:{
        type: sequelize.STRING
    },
});