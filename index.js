const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const app = express();
var jwt = require("jsonwebtoken");
const { auth } = require("./middleware/auth.middleware");

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

//Protected
app.use(auth);
app.get("/movies", (req, res) => {
  res.status(200).send("Movie Data");
});
app.get("/series", (req, res) => {
  res.status(200).send("Series Data");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the db");
  } catch (err) {
    console.log(err);
    console.log("cannot connect to the db");
  }
  console.log("Server is running at port 8080");
});
