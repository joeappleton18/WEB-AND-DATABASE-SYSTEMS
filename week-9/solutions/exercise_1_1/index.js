const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.use(express.static("public")); 

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
	res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});