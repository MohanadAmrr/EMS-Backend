var express = require("express");
var server = express();
var routes = require("./routes/routes.ts");
var mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect(
  "mongodb://localhost:27017/1st",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function checkDB(error) {
    if (error) {
      console.log("errorr");
    } else {
      console.log("Database Connected");
    }
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
  if (error) {
    console.log("errorr");
  } else {
    console.log("started");
  }
});
