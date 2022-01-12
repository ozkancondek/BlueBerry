var express = require("express");
var bcrypt = require("bcryptjs");
var data = require("./resource/data.js");
//var users = require("./resource/users.js");
var app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const comments = [
  { cityId: 5, comment: "iyi", username: "at" },
  { cityId: 5, comment: "kotu", username: "ozkan" },
];

const users = [];
//add new card to ui
console.log(users);

//show all cities or with page number
app.get("/api/cities", function (req, res) {
  const pageNum = req.query.page;
  if (!pageNum) {
    res.send(data);
  }
  if (pageNum) {
    const pageInt = +pageNum;
    const sliced = data.slice(pageInt * 20 - 20, pageInt * 20);
    res.send(sliced);
  }
});

//show particular city with id number
app.get("/api/cities/:id", function (req, res) {
  const selectedCity = data.find((c) => c.id === parseInt(req.params.id));
  res.send(selectedCity);
});

//show users
app.get("/api/users", function (req, res) {
  res.send(users);
});

//add new user to users
app.post("/api/users/signup", function (req, res) {
  const { username, email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user) {
    //res.status(409).json({ message: "You have already an account" });
    res.send("You have already an account");

    return;
  } else {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    users = [...users, { username, email, password: hash }];

    res.send("Account created");
  }
});

//find user in users
app.post("/api/users/signin", function (req, res) {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    res.status(401).json({ message: "There is no account with this email" });
    return;
  } else {
    const isCorrectPass = bcrypt.compareSync(password, user.password); // true
    if (isCorrectPass) {
      // res.json({ message: "success", res: isCorrectPass });
      res.send(`Signed as ${user.username}`);
    } else {
      res.status(403).json({ message: "Wrong pass" });
    }
  }
});

//add comment
app.post("/api/cities/comments", function (req, res) {
  const { cityId, comment, username } = req.body;

  comments.push({ cityId, comment, username });

  res.send(comments);
});

//show all commnets
app.get("/api/cities/comments", function (req, res) {
  res.send("comments");
});

//get single comments
app.get("/api/cities/comments/:id", function (req, res) {
  const { id } = req.params;

  const commentsById = comments.filter((c) => c.cityId === +id);
  if (commentsById.length == 0) {
    res.send("There is no comment.");
  } else {
    res.send(commentsById);
  }
});

app.listen(4000, () => console.log("listening"));
