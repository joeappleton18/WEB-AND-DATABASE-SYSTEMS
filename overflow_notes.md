
## Dependanceis

- Ensure the Node Environment variable is set on the VMs


## Arrays

An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

```javascript
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
```

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

```javascript
var cars = ["Saab", "Volvo", "BMW"];
```

> > example of an array

### Accessing Array Elements

You access an array element by referring to the index number.

This statement accesses the value of the first element in cars:

```javascript
var name = cars[0];
```

> > example of accessing an array element

### Lopping through an array

You can loop through the array elements with the for loop, and use the length property to specify how many times the loop should run. This is similar to the for loop we used earlier; however, instead of specifying a number of iterations, we use the length of the array. Also, notice how its a method of the array object.

The following example outputs all elements in the cars array:

```javascript
var cars = ["Saab", "Volvo", "BMW"];
cars.forEach(function (item, index, array) {
  console.log(item, index); // outputs Saab 0, Volvo 1, BMW 2
});
```

> > example of looping through an array