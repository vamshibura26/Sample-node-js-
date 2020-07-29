const num4 = require('../controller/usercontroller')
var dateTime = new Date();
var date = dateTime.getFullYear()+''+dateTime.getMonth()+''+dateTime.getDate();
var time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
var formate = date+' '+time;
var num1 = 100;



var userid = 'MSPL'+dateTime.getFullYear()+''+(dateTime.getMonth()+1)+''+dateTime.getDate()+num1;


module.exports = userid;