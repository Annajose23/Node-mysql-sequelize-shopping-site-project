const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define("user" ,{
    id : {
        type : Sequelize.UUID,
        primaryKey : true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = User;