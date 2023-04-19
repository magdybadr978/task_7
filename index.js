const express = require("express");
const app = express();
app.use(express.json());
const db = require("./config/db");
//const mod = require("../models/users.model.js");
db.authenticate().then(() => {
    db.sync({force : true});
    console.log("connect");
});

app.use("/user", require("./routes/user_route"));
app.use("/post", require("./routes/post_route"));

app.listen(4000, "localhost", () => {
  console.log("server running");
});
