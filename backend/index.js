var express = require("express");
var bcrypt = require('bcryptjs');
var data = require("./resource/data.js");
var app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const comments=[{cityId:5,comment:"iyi",username:"at"}]

const users=[]

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

app.get("/api/cities/comments", function (req, res) {
  
  res.send(comments);
});


app.get("/api/cities/:id", function (req, res) {
  const selectedCity = data.find((c) => c.id === parseInt(req.params.id));
  res.send(selectedCity);
});
app.post("/api/users/signup", function (req, res) {
  const {email,password}=req.body
  const user=users.find(u=>u.email===email)
  if(user){
    res.status(409).json({message:"You have already an account"})
    return 

  }else{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    users.push({email,password:hash})
    console.log(users)
    res.send("added")
  }
});
app.post("/api/users/signin", function (req, res) {
  const {email,password}=req.body
  const user=users.find(u=>u.email===email)
  if(!user){
    res.status(401).json({message:"There is no account with this email"})
    return 

  }else{
    const isCorrectPass=bcrypt.compareSync(password, user.password); // true
    if(isCorrectPass){
      res.json({message:'success',res:isCorrectPass})

    }else{
      res.status(403).json({message:"Wrong pass"})
    }
  }
});
app.post("/api/cities/comments", function (req, res) {
  const {cityId,comment,username}=req.body

  comments.push({cityId,comment,username})

  res.send(true)
  
});

app.get("/api/cities/comments/:id", function (req, res) {
  console.log('here')
  const {id}=req.params

  const commnetsById=comments.filter(c=>c.cityId===+id)

  res.send(commnetsById)
  
});


app.listen(4000, () => console.log("listening"));
