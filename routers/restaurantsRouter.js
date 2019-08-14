const express = require("express");
const restaurantsRouter = express.Router();
const {
  getAllRestaurants,
  getRestaurantByID
} = require("../controllers/restaurantsController");

restaurantsRouter.get("/", getAllRestaurants);
restaurantsRouter.get("/:restaurantID", getRestaurantByID);

module.exports = { restaurantsRouter };
