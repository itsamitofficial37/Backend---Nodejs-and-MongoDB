const express = require('express');
const app = express();

//load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;

// middleware to parse json request body

app.use(express.json());

// import routes to toDo api

const toDoRoutes = require("./routes/todos");

// mount the toDO api 

app.use("/api/v1", toDoRoutes);

// start server 

app.listen(PORT, ()=> {
    console.log("Server Started SuccesFully ");
});

// connect the database 

const dbConnect = require("./config/database");
dbConnect();

// default router 

app.get("/", (req,res)=> {
    res.send("<h1> I am amit Kumar </h1>")
})





