


const express = require('express');
const data = require("../data.json").projects;
const router = express.Router();


router.get('/', (req, res) => {    // create root route with the locals set to data.projects
    res.render('index', {
      projects: data
    });    // render contents of home page
})

router.get('/about', (req, res) => {    // create about route  
    res.render('about'); // render contents of about page
});


router.get('/project/:id', (req, res) => {  // Dynamic "project" routes
  const {id} = req.params;
  res.render('project', {
    title: data[id].project_name,
    description: data[id].description,
    technologies: data[id].technologies,
    live: data[id].live_link,
    github: data[id].github_link,
    images: data[id].image_urls
  })
  console.log(images);

});














module.exports = router;