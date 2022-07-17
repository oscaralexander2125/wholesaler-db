const express = require("express");

const { getAllWholesalers } = require("./wholesalers.controller");

const wholesalerRouter = express.Router();

wholesalerRouter.get("/wholesalers", getAllWholesalers);

module.exports = wholesalerRouter;
