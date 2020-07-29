const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://postgres:postgres@localhost:5432/My_project',{
    dialect: 'postgres'
})

connection
.sync({
    logging: console.log,
    force: false
})
.then(function(){
    console.log('connected');
})
.catch(function(err){
    console.log('error');
})

module.exports = connection;