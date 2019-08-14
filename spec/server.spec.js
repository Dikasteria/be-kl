const { expect } = require("chai");
const app = require("../app");
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
          console.log(data, "<<<<<");
        });
    });
  });
});
