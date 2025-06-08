const express = require("express");
const morgan = require("morgan"); // this is a third-party middleware for logging HTTP
// requests in Node.js applications.
const app = express();

app.use(morgan("dev"));
app.set("view engine", "ejs");

//Middleware to log requests
app.use((req, res, next) => {
  //console.log("This is a middleware function");
  // this is a custom middleware function that logs the request method and URL.
  return next();
});

app.get("/", (req, res) => {
  res.send("Hello this is our default route");
});

app.get(
  "/about",
  (req, res, next) => { // running a middleware for a specific route
    const a = 10;
    const b = 20;
    console.log(a + b);

    next();
  },
  (req, res) => {
    res.render("index");
  }
);

app.get("/profile", (req, res) => {
  res.send("This is the profile page");
});

app.listen(3000);
