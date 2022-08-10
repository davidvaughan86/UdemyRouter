const express = require('express')
const app = express()
const PORT = 4500

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






app.get ('/person' , (req, res) => {
    let person = []
    res.render('person', person)
})



app.listen(PORT, ()=>{
    console.log(PORT)
})