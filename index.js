const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const places = require("./routes/places");
const myModule = require("./myModule");

// environment variables
dotenv.config({path: "./config/config.env"});

const app = express();

// app.use("/places", places);

app.get("/:place", async (req, res)=>{
    res.json({msg: req.query})
})

app.get("/", async (req, res)=>{
    //both the same
    res.json({greeting: "Hello"});
    res.send({greeting: "Hello"});
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, myModule.myFunc);

// app.listen(PORT, () => {
//     console.log(`App listening in ${process.env.NODE_ENV} mode on port:${PORT}`);
// });
