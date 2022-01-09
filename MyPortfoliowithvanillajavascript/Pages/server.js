var express = require('express');
var fs = require("fs")
var mongoose = require('mongoose')
var app = express();    

var dbUrl = 'mongodb+srv://Antivery:Bigant513@cluster0.2dxmi.mongodb.net/PortfolioSite?retryWrites=true&w=majority'


mongoose.connect(dbUrl,(err) => {
    console.log('connected' , err);
})

app.use(express.static(__dirname))
app.listen(3000);