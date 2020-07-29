const express = require('express');
const { User_details } = require('../model/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userid = require('../Idgen/Idgen');
const Cryptr = require('cryptr');
var cryptr = new Cryptr('My_Password');
const otpGenerator = require('otp-generator');
var visits = 0;

router.get('/',function(req,res,next){
    res.render('Home')
})

router.get('/home',function(req,res,next){
    res.json({
        message: 'Hello vamshi good to see you again'
    })
})
//insert
router.post('/Welcome',function(req,res,next){
const user_details = new User_details({
    user_id: userid+visits,
    name: req.body.name,
    password: cryptr.encrypt(req.body.password),
    otp: otpGenerator.generate(4, {upperCase: false, specialChars: false, alphabets: false}),
    age: req.body.age,
    phno: req.body.phno,
})
user_details.save(function(err){
    if(err){
       console.log('error');
    }
})
visits++;
var token = jwt.sign({ user_details }, 'My_key');
res.json({
    message: 'token has generated',
    token: token,
})
});
//retrieve
router.get('/Welcome/list', function(req, res, next) {
    User_details.findAll()
    .then(function(user_details){
        res.send(user_details)
    })
    .catch(function(err){
        res.send('error')
    })
})
//find by Id
router.get('/Welcome/:id', function(req, res, next){
    console.log(req.params.id)
    User_details.findOne({
        id:req.params.id
    })
    .then(function(user_details){
        res.json(user_details)
    })
    .catch(function(err){
        res.send('error')
    })
});

//update
router.put('/update/:id', function(req, res, next){
    var user_details = {
        name: req.body.name,
        password: cryptr.encrypt(req.body.password),
        age: req.body.age,
        phno: req.body.phno,
    };
    const id = req.params.id
    console.log(id)
    console.log(user_details)
   User_details.findByIdAndUpdate(id)
   .then(function(user_details){
       res.json(user_details)
   })
   .catch(function(err){
       res.send('error')
   })
});



module.exports = router;

