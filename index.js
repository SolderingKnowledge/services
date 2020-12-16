const express = require("express");
const dotenv = require("dotenv");

// environment variables
dotenv.config({path: "./config/config.env"});

const app = express();

app.get("/", async (req, res)=>{
    //both the same
    res.json({greeting: "Hello"});
    res.send({greeting: "Hello"});
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port:${PORT}`);
});
