const http = require('http'); // Import the http package, this is a core NodeJS package so it doesn't need to be installed.
const server = http.createServer(); // Create a server object.
const chalk = require('chalk'); // Import the chalk package from the node modules folder; we installed this in the previous exercise.

server.on('request', (request, response) => { // Listen for requests and respond with a message.
    response.end("hello world");
});

server.listen(8080, function () {
      console.log(chalk.blue('Server is listening on port 8080')); // Print a message to the console when the server starts.
});
