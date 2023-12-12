// the room of requirement
const express = require("express");


// variables
const app = express();


// other stuff
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("welcome to express.js server");
})


app.get("/about", (req, res) => {
    // res.send("<h1>this is ABOUT tub, !not about TUB");
    res.render("index", { 
        title: "This text is totally rendered",
        value: Math.random(),
    });
})

// to serve static files

app.use(express.static("public"));

// server
app.listen(3000, () => {
    console.log("Server is up. What's up server?!")
})

// ABSTRACTCOMMENTS
// npm i nodemon -g  for global instal of nodemon which does the sercer restart for you automatically when files are updated
// npm install ejs - to install a templating engine ejs