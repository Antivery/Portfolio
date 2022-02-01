require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();    
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const nodemailer = require("nodemailer");
const { check, validationResult} = require('express-validator');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('SecretStringForCookies'));
app.use(expressSession({
    name:'session',
    key:['szxjchwosuifhdowe', 'sagdajkshgriq'],
    secret:'cookie_secret',
    resave: false,
saveUninitialized: false

}));
app.use(flash());
app.set('trust proxy', 1);


mongoose.connect(process.env.MONGODB_CONNECTION,(err) => {
    console.log('connected' , err);
})

const ContactForm = mongoose.model('ContactForm', {
    name: String,
    email: String,
    phoneNumber: String,
    message: String
})

app.get("/", (req, res) =>{ 
    res.render('pages/index');
});

app.get("pages/index", (req, res) =>{
    ContactForm.find({}, (err, contactForms) =>{
        res.send(contactForms)
    }) 
});

app.post("/",[   
    check('name', 'A name is required' )
    .trim()
    .isLength({min:3})
    .escape(),

    check('email', 'Your Email is required')
    .trim()
    .isLength({min:3})
    .escape()
    .isEmail()
    .normalizeEmail(),
   
    check('phoneNumber', 'Enter A valid phone number')
    .trim()
    .isLength({min:10})
    .escape(),

    check('message', 'A message is required')
    .trim()
    .isLength({min:5})
    .escape()
],
(req, res) =>{
 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        const alert = errors.array()
        res.render('pages/index', {
          alert
        })
        console.log(alert)

    // return res.status(400).json({ errors: errors.array() });
    }else{
        const contactForm = new ContactForm(req.body)

        contactForm.save((err) =>{
            if(err)
                sendStatus(500)
    
                //  io.emit('contactForm', req.body)
                 res.sendStatus(200)
    
        })
        
    const transporter = nodemailer.createTransport({
        service:process.env.EMAIL_SERVICE,
        auth:{
            user:process.env.EMAIL_ADDRESS,
            pass:process.env.EMAIL_PASS
        }
    })
    const mailOptions = {
        from: req.body.email,
        to:process.env.EMAIL_ADDRESS,
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
    }
 
   
})

// io.on('connection', (socket) => {
//     console.log('user connected')
// })


const server = process.env.PORT || 8080

http.listen(server, () =>{
    console.log('server is listening to port ' + server)
});