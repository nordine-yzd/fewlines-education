import { toWords } from "./index";

describe("groupe test", () => {
  test("test 1 toWorld function with param string ", function () {
    const result = toWords("two words");

    expect.assertions(2);

    expect(result).toEqual(["two", "words"]);
    expect(Array.isArray([result])).toEqual(true);
  });
  test("test 2 toWorld function without param ", function () {
    const result = toWords("");
    expect(result).toEqual([]);
  });
  test("test 3 toWorld function with param string ans char '.!, :' ", function () {
    const result = toWords(".!,- :hello");

    expect.assertions(2);

    expect(result).toEqual(["hello"]);
    expect(Array.isArray([result])).toEqual(true);
    // expect(result).toBe(typeof Array); // va retourner object
  });
});
