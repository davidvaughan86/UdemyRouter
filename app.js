const express = require('express')
const app = express()
const PORT = 7000
const session = require('express-session')
var cookieParser = require('cookie-parser');
app.use(cookieParser());


//setting the middleware to pass in the sessions. Secret is to make the hash more distguishable than what it will create. resave the session when something is written to the session. SaveU means the session will be saved as a cookie even without anything written. Set the session before the routes if using routes


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
   
}))
const mustacheExpress=require('mustache-express')

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))


const path = require('path') 
const VIEWS_PATH = path.join(__dirname, '/views')
app.use('/css', express.static('css'))

// constant the router name you export in the routes file you've created
const userRoutes = require('./routes/users')
const { url } = require('inspector')
const { urlencoded } = require('body-parser')
// tell the app to use the router as the second argument and the route in the first argument. Everything in userRoute will be handled during /users
app.use('/users', userRoutes)




app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({extended : false}))






app.get ('/' , (req, res) => {
    let person = []
    res.render('person', person)
})


app.get("/test", (req, res) => {
    const sess = req.session;
    sess.hello = true;
    console.log(sess);
    if (sess){
        console.log('yes!')
    } else
        console.log('no!')
    
})





app.listen(PORT, ()=>{
    console.log(PORT)
})