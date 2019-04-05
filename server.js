//Example usage in the command prompt
//node Server.js
// Parameters
const port = 880; //Specify a port for our web server
const express = require('express'); //load express with the use of requireJs
const app = express(); //Create an instance of the express library
app.use(express.static(__dirname + '/'));//Serving static files
app.listen(port, function() { //Listener for specified port
    console.log("Server running at: http://localhost:" + port)
});