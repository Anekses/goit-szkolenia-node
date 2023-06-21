const { calc } = require("./calc");

describe("Calc", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  it("should return 4 if we invoke calc with 1, 3, add", () => {
    //given
    const expected = 4;

    //when
    const result = calc(1, 3, "add");

    //then
    expect(result).toBe(expected);
  });

  it("should return 8, for calc with 4, 2, multi", () => {
    const expected = 8;

    const result = calc(4, 2, "multi");

    expect(result).toBe(expected);
  });

  it("should return 0, for calc with action undefined", () => {
    const expected = 0;

    const result = calc(1, 2);

    expect(result).toBe(expected);
  });
});
