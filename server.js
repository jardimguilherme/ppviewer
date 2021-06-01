const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));