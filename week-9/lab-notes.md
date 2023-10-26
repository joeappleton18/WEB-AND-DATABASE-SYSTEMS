# Lab Notes: Week 9

This week, and for future weeks, most of the lab sheets will be self contained, and will not require you to refer to additional notes. However, this week, I want to consider the role of web frameworks in the development of web applications.

## Functions in JavaScript

In JavaScript, functions are first class objects. This means that they can be passed around like any other object. For example, we can assign a function to a variable:

```javascript
const myFunction = function () {
  console.log("Hello World");
};
```

We can also pass a function as an argument to another function, this is commonly referred to as a callback function:

```javascript
const myFunction = function (callback) {
  callback();
};

myFunction(function () {
  console.log("Hello World"); // will output hello world; however, this is invoked by myFunction.
});
```

Finally, we can shorten the above code by using an arrow function:

```javascript
const myFunction = (callback) => {
  callback();
};

myFunction(() => {
  console.log("Hello World"); // will output hello world; however, this is invoked by myFunction.
});
```
