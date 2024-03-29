const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    date_of_birth: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("users", userSchema)