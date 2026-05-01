// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config();
const PORT = process.env.PORT;

const app = express();


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get('/api/auth/login', (req,res)=>{
//     res.send("get login ");
// })
// app.get('/api/auth/signup', (req,res)=>{
//     res.send("signup here ");
// })
// app.get('/api/auth/signout', (req,res)=>{
//     res.send("click here to signout");
// })




app.listen(PORT, () => console.log("Server is running on port: " + PORT));