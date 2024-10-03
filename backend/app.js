require('dotenv').config()
const express = require("express")
const connectDB = require("./utils/database")
const app = express()
const homeRoute = require("./routes/general-route")

app.use(express.json())
app.use('/api',homeRoute)

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
})