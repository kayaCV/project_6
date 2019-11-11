const express = require("express");
const data = require("./data.json");

const app = express();


/**
 * Set up your middleware:
set your “view engine” to “pug”
use a static route and the express.static method
 to serve the static files located in the public folder
 */

// set your “view engine” to “pug”
app.set('view engine', 'pug');


 /**
  * 
  * Set your routes. You'll need:
An "index" route (/) to render the "Home" page with the locals set to data.projects
An "about" route (/about) to render the "About" page
Dynamic "project" routes (/project or /projects) based on the id of the project 
that render a customized version of the Pug project template to show off each project. 
Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
  */
 const mainRoutes = require('./routes');
 app.use(mainRoutes);


 app.use(express.static('public'));




  /**
   * Finally, start your server. Your app should listen on port 3000, and log a string 
   * to the console that says which port the app is listening to.
   */

  app.listen(4000, () => {     // create server
    console.log("App running on port 4000");
});