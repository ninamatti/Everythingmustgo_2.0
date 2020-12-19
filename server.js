const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

// convert from stream to json
app.use(bodyParser.json());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my marketplace!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})