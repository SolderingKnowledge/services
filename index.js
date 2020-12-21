const express = require("express");
// const { router } = require("express"); valid
const { check } = require("express-validator")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");

const places = require("./routes/places");
const { myFunc } = require("./controllers/index");
const { generateToken } = require("./utils/generateToken");

// environment variables
dotenv.config({path: "./config/config.env"});

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.use("/places", places);

// app.get("/:place", async (req, res)=>{
//     res.json({msg: req.query})
// })

app.get("/", (req, res)=> {
    // console.log("first".red.inverse);
    res.json({msg: "Hello"});
})

app.post("/", async (req, res)=>{
    //both the same
    // res.json({greeting: "Hello"});
    // res.send({greeting: "Hello"});
}) 


const PORT = process.env.PORT || 5000;

app.listen(PORT, myFunc);

// app.listen(PORT, () => {
//     console.log(`App listening in ${process.env.NODE_ENV} mode on port:${PORT}`);
// });
