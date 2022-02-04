import { helloSailor } from "./index";

describe("test of function helloSailor", () => {
  test("a function witout param", () => {
    expect.assertions(1);
    const spy = jest.spyOn(console, "log");
    helloSailor();
    expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  });
  test("a function with param", () => {
    expect.assertions(1);
    const spy = jest.spyOn(console, "log");
    helloSailor("Captain Blackbeard");
    expect(spy).toHaveBeenCalledWith("Howdy Captain Blackbeard!");
  });
});
