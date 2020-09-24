const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
require("./1.0.1/models/db");

app.use(bodyParser.json());

const port = process.env.PORT || 8888;
app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1/user", require("./1.0.1/routes/user.route"));

app.listen(port, () => {
  console.log("server is listning to port" + port);
});
