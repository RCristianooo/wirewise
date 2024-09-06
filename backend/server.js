import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/database.js';
import cors from "cors";

// const express = require("express");
// const ejs = require("ejs");

dotenv.config({ path: "./config/.env" })

const app = express();

//using middlewares
app.use(express.json());
app.use(cors())

//importing routes
import userRoutes from "./routes/user.js"
import chatRoutes from "./routes/chat.js"

//using routes
app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)

// app.use(express.static("public"));

// //set view engine to ejs
// app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`);
    connectDB();
});

// app.get('/', function(req, res){
//     res.render('pages/index');
// });

// app.get('/aboutus', function(req, res){
//     res.render('pages/aboutus');
// })

// app.get('/contact', function(req, res){
//     res.render('pages/contact');
// })