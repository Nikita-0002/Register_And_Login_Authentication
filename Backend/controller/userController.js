const userModel = require("../model/userModel")
const jwt = require('jsonwebtoken')

async function Register(req, res) {

    const { name, email, date_of_birth, password } = req.body

    try {
        const userData = new userModel({
            name,
            email,
            password,
            date_of_birth
        })
        const data = await userData.save()
        res.status(201).send({ msg: "Data inserted successfully", data })
    } catch (err) {
        res.status(400).send({ err });
    }
}


async function Login(req, res) {
    try {

        const { email, password } = req.body

        const user = await userModel.findOne({ email, password })

        const details = {
            id: user.id
        }

        const token = jwt.sign(details, "secretkey123")

        if (!user) {
            res.status(400).send({ msg: "Invalid credentials" })
        } else if (!token) {
            res.status(400).send({ msg: "Invalid token" })
        }
        else {
            res.status(200).send({ msg: "User fetched successfully", user, token })
        }
    } catch (err) {
        res.status(500).send({ err })
    }
}


module.exports = {
    Register,
    Login
}