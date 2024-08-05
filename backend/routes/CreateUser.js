const express = require('express')
const { body, validationResult } = require('express-validator')
const user = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/createuser',
    [body('name').isString(),
    body('location').isString(),
    body('email').isEmail(),
    body('password', 'Password is not strong enough').isStrongPassword()],
    async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password,salt)

        try {
            await user.create({
                name: req.body.name,
                email: req.body.email,
                location: req.body.location,
                password: secPassword
            })
            res.json({ success: true })
        }
        catch (error) {
            res.status(500).json({ success: false, error: 'Server error' });
            console.log(error)
        }
    })


router.post('/loginuser',
    body('email').isEmail(),
    async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const email = req.body.email

        try {
            let userData = await user.findOne({ email })

            if (!userData) {
                return res.status(400).json({ errors: "Try logging correct credentials" })
            }

            const pwdCompare = await bcrypt.compare(req.body.password,userData.password)

            if ( !pwdCompare ) {
                return res.status(400).json({ errors: "Password Incorrect" })
            }
            
            const id=userData._id
            const authToken = jwt.sign({id},process.env.SECRET)

            res.json({ success: true,token:authToken })

        }
        catch (error) {
            res.status(500).json({ success: false, error: 'Server error' });
            console.log(error)
        }
    })

module.exports = router