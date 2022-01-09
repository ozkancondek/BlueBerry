var express = require("express");
var data = require("./resource/data.js");
var app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

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
app.get("/api/cities/:id", function (req, res) {
  const selectedCity = data.find((c) => c.id === parseInt(req.params.id));
  res.send(selectedCity);
});

app.listen(4000, () => console.log("listening"));
