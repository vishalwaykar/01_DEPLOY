// console.log("First file for server...");
// import express from "express";
require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/linkedin", (req, res) => {
    res.send("vishalwaykardev");
});

app.get('/login', (req, res)=> {
    res.send("<h1>Welcome to the login page of this application</h1>")
});

app.get('/user/info', (req, res) => {
    res.send({
        firstName: "vishal",
        lastName: "waykar",
        email: "v.waykar@iphone.com",
        designation: "fullstack web developer"
    })
})
app.listen(process.env.PORTs, () => {
  console.log(`Example app listening on port ${port}`);
});