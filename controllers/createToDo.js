//import 

const Todo = require("../models/todo");

// define route handler

exports.createToDo = async (req, res) => {
    try{
        // extract title and description from request body 
        const {title, description} = req.body;

        // creates a new Todo object and insert in DB 

        const response = await Todo.create({title,description});

        // send a json response with a success Flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        });

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}