const { fetchAllRestaurants } = require("../models/restaurantsModels");

exports.getAllRestaurants = (req, res) => {
  fetchAllRestaurants((err, restaurants) => {
    res.status(200).send(restaurants);
  });
};
