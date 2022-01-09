var express = require('express');
var fs = require("fs")
var mongoose = require('mongoose')
var app = express();    
var bodyParser = require("body-parser")
var dbUrl = 'mongodb+srv://Antivery:Bigant513@cluster0.2dxmi.mongodb.net/PortfolioSite?retryWrites=true&w=majority'


mongoose.connect(dbUrl,(err) => {
    console.log('connected' , err);
})


var messages =[{
   name: "me",
   message:"keep bossing up" 
},{
    name: "Dess",
    message:"I love you" 
 } ] 
app.get("/messages", (req, res) =>{
    res.send(messages)
})
app.post("/messages", (req, res) =>{
    messages.push(req.body)
    res.sendStatus(200)
})
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.listen(3000);