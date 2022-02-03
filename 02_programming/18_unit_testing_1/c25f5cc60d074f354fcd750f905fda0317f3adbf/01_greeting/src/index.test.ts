import { greet } from "./index";

describe("a block of tests for greet function", () => {
  test("test greet function without param ", function () {
    const result = greet();
    expect(result).toBe("Hello WORLD!");
  });
  test("test greet function with param ", function () {
    const result = greet("toto");
    expect(result).toBe("Hello TOTO!");
  });
});
