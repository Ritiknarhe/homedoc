const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// helpful functions

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

userSchema.methods.comparePassword = (plainText, callback) => {
    return callback(null, bcrypt.compareSync(plainText, this.password))
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel