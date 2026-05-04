// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config();
const PORT = process.env.PORT;

const app = express();

//--> main/build>>frontend/npm+ backend/npm + frontend/npm build
// --> main/start>>run the server.js then import path and then production react app loads.
const __dirname = path.resolve();


//routing 
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

//develoyment into production 
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (_, req) => {
        res.sendFile(path.join(__dirname, "../fontend", "dist", "index.html"))
    })
}


app.listen(PORT, () => console.log("Server is running on port: " + PORT));