 /**
  * 
  * Set your routes. You'll need:
An "index" route (/) to render the "Home" page with the locals set to data.projects
An "about" route (/about) to render the "About" page
Dynamic "project" routes (/project or /projects) based on the id of the project 
that render a customized version of the Pug project template to show off each project. 
Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
  */


const express = require('express');
const data = require("../data.json");
const router = express.Router();


router.get('/', (req, res) => {    // create root route with the locals set to data.projects
    res.locals = data.projects;
    res.render('index');    //// render contents of home page
})

router.get('/about', (req, res) => {    // create about route  
    res.render('about'); // render contents of about page
});














module.exports = router;