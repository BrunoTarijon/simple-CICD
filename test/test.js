const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World with docker!", done);
    })
});