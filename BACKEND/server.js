const express = require("express");
const mongoose = require("mongose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();


const PORT = process.env.PORT || 8070;

app.use(cose());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser : true,
    useUnifiedTopologyL : true,
    useFindAndModify : false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`)
})

