const express = require('express');
const User_details = require('./model/user')
const path = require('path');
const Pagerouter = require('./controller/usercontroller');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/',Pagerouter)

app.use(function(req, res){
    res.send('oops went wrong')
}) 


app.listen(8080)
console.log('Server is Running on port')


