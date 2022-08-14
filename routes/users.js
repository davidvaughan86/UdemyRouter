const express = require('express')
//require express then attach the router method to the constant router and call it. This is the same as app for app/index.js


const router = express.Router()


//middleware for authentication
function authenticate (req, res, next) {
    if(req.session){
        if(req.session.name && req.session.age){

            next()
        }
    }else{res.redirect('/users/add-user')}
    
}

// in the routers folder we use router rather than app to METHOD the route

router.get('/' , (req,res) =>{
    let user= { 
        name: req.session.name, 
        age: req.session.age,
        address:{
                street: "1209 Mem",
                city: "atlanta",
                state: "ga"
                }}

    res.render('index', user)
})


router.get('/users' , (req, res) => {
    const users = [
        {name: 'david', 
            address: {
                        streetnumber:'1206',
                        street: 'Memorial Dr. SE',
                        city: 'Atlanta',
                        state: 'GA'}
                    },
        {name: 'Patrick', 
            address: {
                        streetnumber:'141',
                        street: 'South Ave',
                        city: 'Forest Park',
                        state: 'GA'}
                    },
        {name: 'Diana', 
            address: {
                        streetnumber:'4452',
                        street: 'Challedon Drive',
                        city: 'Fairburn',
                        state: 'GA'}}
                ]
        res.render('users', {users: users})
            
        
        
})

router.get('/bank-accounts' , authenticate, (req,res) =>{
    res.send('bank accounts')
})







// update the post methods on any templates or html partials
router.get('/add-user',(req,res) => {
    res.render('add-user')
})

router.post('/add-user' ,(req,res) => {
    let name = req.body.name;
    let age = req.body.age;
   
    if(req.session){
        req.session.name = name
        req.session.age = age
        req.session.user = {name: name, age: age}

    }


    console.log(name)
    console.log(age)
    
    res.status(200).send()
})

//mke sure to export the router
module.exports = router


