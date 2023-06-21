const request = require("supertest");
const app = require("./app");

describe("Dogs", () => {
  beforeAll(async () => {
    // https://jestjs.io/docs/mongodb
    // https://stackoverflow.com/questions/49359476/mock-a-function-from-another-file-jest
  });

  it("should return dogs list on /dogs endpoint", async () => {
    const route = "/dogs";

    const response = await request(app).get(route);

    expect(response.body).toEqual([]);
  });
});
