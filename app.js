//importing modules
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connecting to the database
mongoose.connect("mongodb://mongodb:27017/taskdb");

//gather data from forms
app.use(express.urlencoded({ extended: true }));

//use public folder for static files (an image here)
app.use(express.static("public"));

// Logs details with morgan module
const morgan = require("morgan");
app.use(morgan("dev"));

//the views is set by an ejs file
app.set("view engine", "ejs");

//routes are defining the differents features of the app
app.use(require("./routes/index"))
app.use(require("./routes/taskRoutes"))

app.listen(3000, () => console.log("Server started listening on port: 3000"));
