const jwt = require("jsonwebtoken");

// const token = jwt.sign({userId: "myId"}, "I can grab userId from DB and validate against it")

const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "30d"});// generating token to expire in 30days
}

exports.generateToken = generateToken;