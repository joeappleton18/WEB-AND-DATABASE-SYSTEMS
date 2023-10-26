const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("public")); // Serve static files from the public folder.


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});