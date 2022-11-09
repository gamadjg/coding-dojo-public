const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
require("./config/mongoose.config");

// app.use(cors());
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const app_routes = require("./routes/player.routes");
app_routes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
