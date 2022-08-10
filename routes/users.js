const express = require('express')
//require express then attach the router method to the constant router and call it. This is the same as app for app/index.js

const router = express.Router()


// in the routers folder we use router rather than app to METHOD the route

router.get('/' , (req,res) =>{
    const user = {name: 'david', age: 36}
    res.render('index', {user: user})
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
// update the post methods on any templates or html partials
router.get('/add-user',(req,res) => {
    res.render('add-user')
})

router.post('/add-user' ,(req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    console.log(name)
    console.log(age)

    res.status(200).send()
})

//mke sure to export the router
module.exports = router


