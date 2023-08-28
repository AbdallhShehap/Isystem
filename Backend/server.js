//Import Modules
const express = require("express");
const cors =require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});
const PORT = process.env.PORT ;



const app = express();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome to the Isystem e-commerce ');
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
