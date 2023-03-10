const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')

const routepost = require("./backend/routes/post.route");

const app = express();

app.use(express.json());

app.use(cors());


mongoose
  .connect(
   // "mongodb+srv://iftikhar:vitonicconception@cluster0.c0qwkd2.mongodb.net/post?retryWrites=true&w=majority"
    "mongodb+srv://chetouiiftikhar:vitonicconception@cluster0.hnqbnlb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });



app.use("/post", routepost);


app.use(express.static(path.join(__dirname, "backend/www")));

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});