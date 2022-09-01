import Sequelize from 'sequelize';
import dotenv from 'dotenv/config'

console.log(process.env.DB_HOST)

const db = new Sequelize(process.env.DB_NAME ,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port:'3306',
    dialect:'mysql',
    define:{  
        freezeTableName:true,
        timestamps:false
    },
    poll:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    },
    operatorAliases:false
});


export default db;