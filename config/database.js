
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=> {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then (()=> {
        console.log("DB is connected Succesfully")
    })
    .catch((error)=> {
        console.log("Db is not connected Sucessfully");
        console.error(error.message);
        process.exit(1)
    })
}

module.exports = dbConnect;