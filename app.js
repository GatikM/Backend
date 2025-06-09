const express = require("express");
const morgan = require("morgan"); // this is a third-party middleware for logging HTTP
// requests in Node.js applications.
const app = express();
const userModel = require("./models/user"); 
const db = require("./config/db"); 


app.use(morgan("dev"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// this is a built-in middleware function in Express that parses incoming requests with urlencoded payloads

app.use(express.static("public"));

//Middleware to log requests
app.use((req, res, next) => {
  //console.log("This is a middleware function");
  // this is a custom middleware function that logs the request method and URL.
  return next();
});

app.get("/", (req, res) => {
  res.render('index');
});

app.get(
  "/about",
  (req, res) => {
    res.send("This is the about page");
  }
);

app.get("/profile", (req, res) => {
  res.send("This is the profile page");
});


app.post("/get-form-data",(req,res) => {
  console.log(req.body);
  res.send("Form data received");
})


app.get("/register", (req,res) => {
  res.render('register');
})

app.post("/register", async (req, res) => {
  const{username, email,password} = req.body;

  const newUser = await userModel.create({
    username: username,
    email: email,
    password: password
  })
  res.send("User registered successfully!!");
})
app.listen(3000);
