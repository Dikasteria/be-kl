const fs = require("fs");

const fetchAllRestaurants = cb => {
  const restaurantsList = [];
  fs.readFile("./data/restaurants.json", (err, restaurants) => {
    const parsedRestaurants = JSON.parse(restaurants);
    for (let i = 0; i < parsedRestaurants.length; i++) {
      restaurantsList.push(parsedRestaurants[i].name);
    }
    cb(null, restaurantsList);
  });
};

const fetchRestaurantByID = (ID, cb) => {
  fs.readFile("./data/restaurants.json", (err, restaurants) => {
    const parsedRestaurants = JSON.parse(restaurants);
    const singleRestaurant = parsedRestaurants.filter(function(restaurant) {
      if (ID == restaurant.id) {
        return restaurant;
      }
    });
    cb(null, singleRestaurant);
  });
};

module.exports = { fetchAllRestaurants, fetchRestaurantByID };
