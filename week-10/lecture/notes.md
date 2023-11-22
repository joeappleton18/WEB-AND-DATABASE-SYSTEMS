## Week 10 Lecture Notes

1. The three tier architecture
   - The three tier architecture is a common architecture for web applications. It is a client-server architecture that separates the presentation layer, the application layer and the data layer.
  
2. The presentation layer
   - The presentation layer is the layer that the user interacts with. It is responsible for rendering the user interface and handling user input. The presentation layer is typically implemented using HTML, CSS and JavaScript. The presentation layer is also referred to as the client-side.

3. The application layer
   - The application layer is the layer that handles the business logic of the application. It is responsible for processing user input and generating responses. The application layer is typically implemented using a server-side programming language such as Node.js, PHP, Python or Java. The application layer is also referred to as the server-side.

4. The data layer
   1. The data layer is the layer that handles the storage and retrieval of data. It is responsible for storing data in a database and retrieving data from a database. The data layer is typically implemented using a database such as MySQL, MongoDB or PostgreSQL.





## Advanced Issues in Web Development (part two)

## General 

### Escaping and sanitizing user input

- escaping and sanitizing user input is the process of removing characters that have a special meaning in HTML, CSS and JavaScript from user input
- escaping and sanitizing user input is necessary to prevent cross-site scripting attacks among other things.

## SQL injection

- SQL injection is a code injection technique that exploits a security vulnerability in an application's database layer
- SQL injection is used to attack data-driven applications, and it is particularly effective against web applications
- It occurs when user input is not properly sanitized before being used in an SQL query

## password hashing

- password hashing is the process of converting a password into a hash value
- a hash value is a fixed-length string that is generated from a variable-length string
- a hash function is a function that maps a variable-length string to a fixed-length string
- a hash function is a one-way function, meaning that it is easy to compute the hash value of a string, but it is difficult to compute the string from the hash value
- a hash function is deterministic, meaning that the same string will always produce the same hash value

## password salting

- password salting is the process of adding a random string to a password before hashing it
- a salt is a random string that is added to a password before hashing it
- a salt is stored in the database along with the hash value
- a salt is different for each user

## password hashing and salting in Node.js

- the bcrypt module can be used to hash and salt passwords in Node.js
- the bcrypt module can be installed using npm
- the bcrypt module can be used to generate a salt and hash a password



- SQL injection
- cross-site scripting
- cross-site request forgery
- session hijacking
- session fixation
- brute force attacks
