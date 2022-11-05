import { DataTypes } from "sequelize";
import db from "../db/connection.db";


const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    role: {
        type: DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
});

export default User;