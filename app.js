const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const port = 8080


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes

app.use("/api/products", productRoute).listen(port)


// here write your mongodb data user not mine!!!!!!!
mongoose.connect("mongodb+srv://123:123@firstproject.9nfys.mongodb.net/?retryWrites=true&w=majority&appName=firstproject")
.then(() => {
    console.log('Connected to database!')
})

.catch(() => {
    console.log("is not Connected to databse!!!")
})




