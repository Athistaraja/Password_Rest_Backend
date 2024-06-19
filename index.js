require('dotenv').config();
const express = require("express");

const mongodb = require("./db/connect")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongodb();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');
const passwordReset = require('./routes/passwordReset.routes');

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", passwordReset);


app.get("/", (req, res)=>{
    res.status(200).send("Welcome to our Password Reset Application");
})

//Initializing the port number
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Application is running on PORT ${PORT}`);
});