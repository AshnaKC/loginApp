const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router  = express.Router();
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{
        user: req.user
        });
    })
module.exports = router; 