const Client = require('pg').Client

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'My_project',
  password: 'postgres',
  port: 5432,
  dialect: 'postgres'
})

module.exports = client;