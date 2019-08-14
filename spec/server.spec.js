const { expect } = require("chai");
const { app } = require("../app");
const chai = require("chai");
chai.use(require("chai-sorted"));
const request = require("supertest")(app);

describe("/api", () => {
  describe("/restaurants", () => {
    it("GET, responds with 200", () => {
      return request
        .get("/api/restaurants")
        .expect(200)
        .then(data => {
          expect(data.body).to.be.an("array");
          expect(data.body.length).to.equal(6);
        });
    });
  });
  describe("/restaurants/:restaurantID", () => {
    it("GET, responds with a single restaurant when passed a valid id number", () => {
      return request
        .get("/api/restaurants/1")
        .expect(200)
        .then(data => {
          expect(data.body).to.be.an("object");
          expect(data.body).to.contain.keys(
            "id",
            "name",
            "address",
            "cuisine",
            "rating"
          );
        });
    });
  });
});
