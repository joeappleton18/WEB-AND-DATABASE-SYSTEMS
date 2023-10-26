- get project
- seed database
- open the project in vs code
- install mysql
- set up mysql client
  - npm install mysql
- create a connection to the database:

```javascript
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: procees.env.DB_PORT,
});

// we do this to use async await with mysql (see: https://stackoverflow.com/questions/50093144/using-async-await-with-a-mysql-database)
connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Booom! You are connected");
});
```

- see if you can write the queries to get the data from the database and update the dash 
  - set up the ejs variables

- see if you can write the query to get a list of students and display them on the page. Hint, we need to use a join. 
	- Write a loop in the ejs

- let's consider how we can edit a student 
  - set up the get '/students/edit/:id' route

- let's consider how we can update a student
  - set up the post '/students/update/:id' route

Main task 