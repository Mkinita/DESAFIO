import sequelize from "sequelize";


const db = new sequelize ('prueba', 'root','1123',{
    host:'127.0.0.1',
    port:'3306',
    dialect:'mysql',
    define:{
        timestamps: false
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