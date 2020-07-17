const express = require("express");

const app = express();

const get = require("./routes/get");
const ping = require("./routes/ping");


app.use("/api", get());
app.use("/api", ping());





app.listen(3000, () => {
 console.log("Server running on port 3000");
});




