const express = require("express");
const app = express();
const port = 8000;
const ejs = require("ejs");

app.set("view engine", "ejs"); // Set the view engine to ejs.
app.use(express.static("public")); // Serve static files from the public folder.


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});


app.get("/contact", (req, res) => {

    res.render("contact");

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})