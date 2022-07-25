 const express = require('express')

 const app = express()

 app.get('/api/main',(req,res) =>{
    res.send('This is express')
    res.send("<h1>By using heading tag</h1>")
    res.send({
       Name:"supriya",
       Course:"MERN"
 })
 
 })

 app.listen(9090,()=>{
 console.log("server running");
 })