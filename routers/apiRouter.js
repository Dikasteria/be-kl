const express = require("express");
const apiRouter = express.Router();
const { restaurantsRouter } = require("./restaurantsRouter");

apiRouter.use("/restaurants", restaurantsRouter);

module.exports = { apiRouter };
