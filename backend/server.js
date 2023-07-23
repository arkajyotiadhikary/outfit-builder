const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const getCloths = require("./routes/getCloths");

const port = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", getCloths);

app.listen(port, () => {
    console.log("server is running at port 8000");
});
