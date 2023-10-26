const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/about", (req, res) => {
	res.send("This is the about page!");
});

app.get("/contact", (req, res) => {
	res.send("This is the contact page!");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});