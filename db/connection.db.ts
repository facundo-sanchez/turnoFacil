import { Sequelize } from "sequelize";

// PARAMETROS
const db = new Sequelize('nodeserver','root','sasa',{
    host:'localhost',
    dialect:'postgres',
    // logging:false
});

export default db;