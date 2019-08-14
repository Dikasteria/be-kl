const {
  fetchAllRestaurants,
  fetchRestaurantByID
} = require("../models/restaurantsModels");

exports.getAllRestaurants = (req, res) => {
  fetchAllRestaurants((err, restaurants) => {
    res.status(200).send(restaurants);
  });
};

exports.getRestaurantByID = (req, res) => {
  const ID = req.params.restaurantID;
  fetchRestaurantByID(ID, (err, restaurant) => {
    if (restaurant.length < 1) {
      res.status(404).send({ status: 404 });
    }
    res.status(200).send(restaurant[0]);
  });
};
