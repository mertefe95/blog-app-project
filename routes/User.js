const express = require('express');
const router = new express.Router();
const User = require('../models/User');
const validator = require('validator');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    const users = await User.find({})

    


    try {
    if (!users) {
        return res
            .status(400)
            .send('No users found.')
    } 

    return res
        .status(200)
        .send(users)
    } catch (e) {
        return res
            .status(500)
            .send(e)
    }

})

router.get('/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id)
        .then((user) => {
            if (!user) {
                return res.status(400).send("No existing user.")
            }

            res.send(user)
        })
        .catch((e) => {
            res.status(500).send()
        })
})





router.post('/add', async (req, res) => {
    const { email, password, age, username} = req.body
    const digit = /^(?=.*\d)/
    const upperLetter = /^(?=.*[A-Z])/
    const letter = /^(?=.*[a-zA-Z])/

    if (!email || !password || !age || !username) {
            return res
                .status(400)
                .send({ error: "Please fill the missing parts"})
    } else if (!validator.isEmail(email)) {
            return res
                .status(400)
                .send({ error: "Email is invalid. Please enter a valid email." })
    }

    try {

    if (password.length < 8) {
        return res
            .status(400)
            .send({ error: "Please enter a password that is more than 8 characters length." })
    } else if (!digit.test(password)) {
        return res
            .status(400)
            .send({ error: "Please enter a password that is including at least 1 number." })
    } else if (!upperLetter.test(password)) {
        return res
            .status(400)
            .send({ error: "Please enter a password that has at least one uppercase letter." })
    }
    
    let userExists = await User.find({ email })

    if (userExists.length > 0) {
        return res.status(400).send({ error: 'User already exists' })
    }

    let encPassword = ''
    let theSalt = await bcrypt.genSalt(10)
    encPassword = await bcrypt.hash(password, theSalt)

    let registrationRequest = {
        email,
        password: encPassword,
        username,
        age
    }

    const user = new User(registrationRequest)
    await user.save()

    return res  
            .status(200)
            .send('Successful registration')

    } catch (e) {
        return res
            .status(500)
            .send(e)
    }
})

router.patch('/', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res
            .status(400)
            .send({ error: "Invalid Updates!" })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/', async (req,res) => {

})


module.exports = router;
