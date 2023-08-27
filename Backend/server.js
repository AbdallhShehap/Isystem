//Import Modules
const express = require("express");
const cors =require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});





const app = express();
app.use(cors());



app.listen(9090, () => {
    console.log("Server listening on port 9090");
})
