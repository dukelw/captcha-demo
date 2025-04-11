require("dotenv").config();
const cors = require("cors");
const express = require("express");
const route = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.set("view engine", "ejs");

const session = require("express-session");

app.use(
  session({
    secret: "captcha-demo",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Init middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Init db
require("./databases/connect-mongodb");

// Use routes
route(app);

const runningServer = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
  runningServer.close(() => console.log("Exit server express"));
});

module.exports = app;
