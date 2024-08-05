const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        res.json({
            food_items:global.food_items,
            food_category:global.food_category
        })
    } catch (error) {
        res.status(400).send("Server error")
    }
})

module.exports = router