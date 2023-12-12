// the room of requirement
const express = require("express");


// variables
const app = express();


// other stuff
app.get("/", (req, res) => {
    res.send("welcome to express.js server");
})

app.get("/about", (req, res) => {
    res.send("<h1>this is ABOUT tub, !not about TUB");
})

// server
app.listen(3000, () => {
    console.log("Server is up. What's up server?!")
})