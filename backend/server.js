const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const userroutes = require('./routes/CreateUser')
const displayroutes = require('./routes/DisplayData')
const orderroutes = require('./routes/OrderData')
require('dotenv').config();

const app = express()

app.use(cors())

app.use((req,res,next)=>{
    next()
})

app.use(express.json())
app.use('/api' , userroutes)
app.use('/api' , displayroutes)
app.use('/api' , orderroutes)

app.get('/' , (req,res) => {
    res.send("Hello")
})

app.listen(process.env.PORT , ()=>{
    console.log("Listeneing on port ",process.env.PORT)
})

const mongodb = async()=>{
    try
    {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to db")

        const db =  mongoose.connection.db
        const collection = db.collection("fooditems")
        const fetch_data = await collection.find({}).toArray()

        const collect = db.collection("foodcategory")
        const category_data = await collect.find({}).toArray()

         if(fetch_data.length==0 || category_data.length==0)
         {
             console.log("No data present in db")
         }
         else
         {
             //console.log(fetch_data)
             global.food_items = fetch_data    //global variables can be updates anywhere in our program
             global.food_category = category_data
         }
    }
    catch(error)
    {
        console.log(error)
    }
}

mongodb()


