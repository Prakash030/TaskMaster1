const express = require('express');
const router = express.Router();

const User = require('../Models/UserSchema');
const bcrypt = require('bcryptjs');

// Sign up

router.post('/register', async (req, res) => {
    try{
        const {email, username, password} = req.body;
        const hashPass = bcrypt.hashSync(password);
        const existingUser = await User.findOne({email: email});

        if(existingUser){
            return res.status(200).json({message: "User already exists!"});
        }

        const newUser = new User({
            email,
            username,
            password: hashPass,
        })

        await newUser.save();
        res.status(201).json({message: "Sign up successfully!"});
    }
    catch (err) {
        return res.status(400).json({message: "User"});
    }
})

// log in

router.post('/signin', async (req, res) => {
    try{
        // const {email, uPassword} = req.body;
        const user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(200).json({message: "User not found!"});
        }

        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if(!isMatch){
            return res.status(200).json({message: "Invalid password!"});
        }
        const {password, ...others} =user._doc;

        res.status(200).json({others})
    }
    catch (err) {
        res.status(200).json({message: err.message});
    }
})


module.exports = router;