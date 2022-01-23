var express = require('express')
var fs = require("fs")
var mongoose = require('mongoose')
var app = express();    
var bodyParser = require("body-parser")
var http = require("http").Server(app)
var io = require("socket.io")(http)
var nodemailer = require("nodemailer");
const { info } = require('console');
const config = require('config');

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(config.get('App.mongoDB.connectionString'),(err) => {
    console.log('connected' , err);
})

var ContactForm = mongoose.model('ContactForm', {
    name: String,
    email: String,
    phoneNumber: String,
    message: String
})


app.get("/contactForm", (req, res) =>{
    ContactForm.find({}, (err, contactForms) =>{
        res.send(contactForms)
    })
    
})
app.post("/contactForm", (req, res) =>{
    var contactForm = new ContactForm(req.body)

    contactForm.save((err) =>{
        if(err)
            sendStatus(500)

             io.emit('contactForm', req.body)
             res.sendStatus(200)

    })
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"antivery@gmail.com",
        pass:"Anti45406!"
    }
})
const mailOptions = {
    from: req.body.email,
    to:"antivery@gmail.com",
    subject:`Message from ${req.body.email} ${req.body.name}`,
    text:req.body.message
}
transporter.sendMail(mailOptions, (error, info) =>{
    if(error){
        console.log(error)
    res.send('error')
    }else {
        console.log('Email sent:' + info.response);
        console.log('success');
    }
})
})

io.on('connection', (socket) => {
    console.log('user connected')
})
const server = config.get('App.webServer.port')

http.listen(server, () =>{
    console.log('server is listening to port ' + server)
});