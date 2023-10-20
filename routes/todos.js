const express = require("express");
const router = express.Router();

// import controller 
const {createToDo} = require("../controllers/createToDo");

//  define Api 
router.post("/createToDo",createToDo);

module.exports = router;
