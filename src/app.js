const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const wholesalerRouter = require("./routes/wholesalers/wholesalers.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use("/wholesalers", wholesalerRouter);

module.exports = app;
