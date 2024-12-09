const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const {server} = require("socket.io");
const http = require("http");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Database connection
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("MongoDB connected"))
    .catch((error)=> console.log(error));

