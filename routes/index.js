const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {    // create root route
    res.render('index');    //// render contents of home page
})

router.get('/about', (req, res) => {    // create about route  
    res.render('about'); // render contents of about page
});














module.exports = router;