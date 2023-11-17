# Lecture Notes

This week, we will be learning about Node.js and Express.

Last week, we created some simple JavaScript programs. We ran these programs in the Node.js environment. 

However, we did not use any Node.js features. We just used JavaScript features. 

This week, we will be learning about Node.js features. We will be learning about the Node Package Manager (npm) and the Express framework.

## The Node Package Manager (npm)

### Slide 0: The anatomy of a node project

- A node project is a folder that contains a `package.json` file.
- The `package.json` file contains information about the project, including the packages it uses.
- The packages are listed in the `package.json` file.
- A `package` is a piece of code that can be used in a node project.
- A `package.lock` file contains information about the packages that are installed in the project.
- The packages are stored in a folder called `node_modules`.
- A start script is a script that runs the project. It is usually called `start`.

```bash 

my-project
├── package.json // contains information about the project
├── package-lock.json // contains information about the packages that are installed in the project
├── node_modules // contains the packages that are installed in the project
├── index.js // the main file of the project

```


```

### Slide 1: What is npm?
- npm is a package manager for JavaScript
- npm comes bundled with Node.js. If you have Node.js installed, you have npm installed!
- npm is the world's largest software registry
- npm also provides a command-line interface (CLI) for managing packages and other tasks
- npm is used to install, manage, and publish packages, manage dependencies, and run scripts.

## The package.json file looks like this 

{
  "name": "my_first_website",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "terminalizer": "^0.11.0"
  },
  "devDependencies": {},
  "description": ""
}

- The `package.json` file contains information about the project.
- The `name` field is the name of the project.
- The `version` field is the version of the project.
- The `main` field is the main file of the project.
- The `scripts` field is a list of scripts that can be run using the `npm run` command.
- The `author` field is the author of the project.
- The `license` field is the license of the project.
- The `dependencies` field is a list of packages that the project depends on.
- The `devDependencies` field is a list of packages that the project depends on in development mode.
- The `description` field is a description of the project.


### Slide 2: Adding a package to your project

- First, we need to create a `package.json` file. This file contains information about our project, including the packages we are using.
- To create a `package.json` file, run `npm init` in your project directory. You will be prompted to enter some information about your project. You can skip most of the prompts by pressing enter.
- To install a package, run `npm install <package-name>`. This will install the package and add it to your `package.json` file.

### Slide 3: Using a package in your project

- To use a package in your project, you need to import it into your JavaScript file. You can do this using the `require` function.
- For example, to import the `express` package, you would write `const express = require('express')`.
- You can now use the package in your code. For example, you can create an express app by writing `const app = express()`.

### Slide 4: The `node_modules` folder

- When you install a package, npm creates a folder called `node_modules` in your project directory. This folder contains all of the packages you have installed.
- You should not edit the contents of the `node_modules` folder.
- Since we can run `npm install` to install all of the packages in our `package.json` file, we do not need to commit the `node_modules` folder to our git repository. 

### Slide 5: The `package-lock.json` file

- When you install a package, npm creates a file called `package-lock.json` in your project directory. This file contains information about the packages you have installed.
- You should not edit the contents of the `package-lock.json` file.

### Slide 6: The `package.json` file

- When you run `npm init`, npm creates a file called `package.json` in your project directory. This file contains information about your project, including the packages you are using.
- You should not edit the contents of the `package.json` file.

### Slide 7: The `npm install` command

- The `npm install` command installs all of the packages in your `package.json` file.
- You should run `npm install` whenever you clone a project from GitHub or pull changes from GitHub.
- You can install dev dependencies by running `npm install --dev`.
- You can install a specific version of a package by running `npm install <package-name>@<version>`.

### Slide 8: NPM scripts 

- You can add scripts to your `package.json` file. These scripts can be run using the `npm run` command.
- For instance, it's common to add a script called `start` that runs your app. You can then run your app by running `npm run start`.
- The scripts run in the context of the node_modules folder. This means that you can run `npm run <script-name>` to run any script in the node_modules folder.


## The Express Framework


### Slide 0: What is a web framework?

- A web framework is a software framework that is designed to support the development of web applications.
- A web framework provides a standard way to build and deploy web applications.
- Common web frameworks include Express, Flask, Django, and Ruby on Rails.

### Slide 0: What is Express?

- Express is a web framework for Node.js
- Express is the most popular web framework for Node.js
- Express is a minimal and flexible framework

### Slide 1: Installing Express

- To install Express, run `npm install express` in your project directory.

### Slide 2: Creating an Express app

```
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})


### Slide 3: Running an Express app

- To run an Express app, run `node <file-name>` in your project directory.
- For example, if your app is in a file called `app.js`, you would run `node index.js`.


### Slide 4: Avoiding having to restart the server

- Currently, we have to restart the server every time we make a change to our app.
- First install nodemon by running `npm install --dev nodemon`.
- To set up a npm dev command, we need to add a script to our `package.json` file.
- For example, we can add a script called `dev` that runs our app in development mode.


### Slide 4: The `app.get` method

- The `app.get` method is used to create a route.
- The first argument is the path of the route. The second argument is a callback function that is called when the route is requested.
- The callback function takes two arguments: `req` and `res`. `req` is an object that contains information about the request. `res` is an object that contains information about the response.
- The `res.send` method is used to send a response to the client. If we don't send a response, the client will hang.

### Slide 5: The `app.listen` method

- The `app.listen` method is used to start the server.
- The first argument is the port number. The second argument is a callback function that is called when the server starts.

### Slide 6: Express routing 

- Express routing is the process of matching a request to a route.
- Express routing is done using the `app.get` method.
- Routing is done through pattern matching. For example, if we have a route that matches `/users/:id`, we can match `/users/1` and `/users/2` to the same route.
- We can handle different HTTP methods by using different methods. For example, we can use `app.get` to handle GET requests and `app.post` to handle POST requests.

### Slide 7: Express middleware

- Express middleware is a function that is called before the route handler.
- Express middleware is used to perform common tasks, such as logging, authentication, and error handling.
- Express middleware is added using the `app.use` method.

### Slide 8: Express configuration

- Express configuration is the process of setting up the Express app.
- Express configuration is done using the `app.set` method.
- For instance we can set the port number using `app.set('port', 3000)`.
- Or, we can set the public directory using `app.set('public', 'public')`.

## Installing some express middleware

We are going to use the following middleware:

- `body parser` - parses the body of a request
- `EJS` - a templating engine

### EJS Templates 

### Slide x: What is a template?

- A template is a file that contains placeholders for data.
- The placeholders are replaced with the data when the template is rendered.
- Templates are useful for creating reusable components, such as a header or a footer.
- Common templating engines include EJS, Handlebars, and Pug.

### Slide 0: What is EJS?

- EJS is a templating engine for Node.js
- EJS is the most popular templating engine for Node.js
- EJS is a minimal and flexible templating engine
- EJS works with Express

### Slide 1: Installing EJS

- To install EJS, run `npm install ejs` in your project directory.
- Next, we need to configure EJS in our Express app. We can do this by adding the following line to our app.js file: `app.set('view engine', 'ejs')`.
- Now, we can create a view folder, to contain our EJS templates.

### Slide 2: Creating an EJS template

- To create an EJS template, we need to create a file with the `.ejs` extension.
- We can then use the `<% %>` tags to add JavaScript code to our template.
- We can use the `<%= %>` tags to add JavaScript code that will be evaluated and displayed in the template.

### Slide 3: Rendering an EJS template

- To render an EJS template, we need to use the `res.render` method.
- The first argument is the name of the template. The second argument is an object containing the data that will be passed to the template.
- For example, if we have a template called `index.ejs`, we can render it by writing `res.render('index', { title: 'Hello World!' })`.
- We can then access the data in the template by using the `<%= %>` tags. For example, we can display the title by writing `<%= title %>`.
- We can also use the `<% %>` tags to add JavaScript code to our template. For example, we can use the `<% %>` tags to add a loop to our template. This is useful for displaying a list of items.

### Slide 4: Partials 

- Partials are reusable pieces of code that can be included in other templates.
- Partials are useful for creating reusable components, such as a header or a footer.
- To create a partial, we need to create a file with the `.ejs` extension.
- We can then use the `<% %>` tags to add JavaScript code to our partial.
- We can then include the partial in another template by using the `<%- %>` tags. For example, we can include a header partial by writing `<%- include('partials/header') %>`.




