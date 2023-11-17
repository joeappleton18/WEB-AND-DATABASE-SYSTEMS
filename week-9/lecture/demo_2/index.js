const express = require('express');
const app = express();
const ejs = require('ejs');


// use some middleware

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
  res.render('index');
})

app.get('/about', (req,res) => {
    res.send('about page');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});