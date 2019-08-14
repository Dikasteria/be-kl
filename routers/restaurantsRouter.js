const express = require("express");
const restaurantsRouter = express.Router();
const { getAllRestaurants } = require("../controllers/restaurantsController");

restaurantsRouter.get("/", getAllRestaurants);

module.exports = { restaurantsRouter };
