const express = require("express");

const app = express();

const url = require("./routes/url");
const ping = require("./routes/ping");
const post = require("./routes/post");


app.use("/api", url());
app.use("/api", ping());
app.use("/api", post());




app.listen(3000, () => {
 console.log("Server running on port 3000");
});




