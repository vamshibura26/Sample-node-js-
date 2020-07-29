const connection = require('../database/database')
const Sequelize = require('sequelize');


const User_details =connection.define('user_details',{
    user_id: {
          type: Sequelize.STRING,
          allowNull: true,
          primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    otp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phno: {
        type: Sequelize.STRING,
        allowNull: true
    },
    },{
    timestamps: false
});


module.exports = { User_details }
