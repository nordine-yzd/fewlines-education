import { getRandomUser } from "./index";

describe("test of get random function ", () => {
  test("test first value", () => {
    expect.assertions(3);
    const spy = jest.spyOn(Math, "random");
    spy.mockImplementation(() => 0);
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frieda");
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frieda");
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frieda");
  });
  test("test second value", () => {
    expect.assertions(3);
    const spy = jest.spyOn(Math, "random");
    spy.mockImplementation(() => 0.5);
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Francis");
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Francis");
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Francis");
  });
  test("test third value", () => {
    expect.assertions(3);
    const spy = jest.spyOn(Math, "random");
    spy.mockImplementation(() => 1);
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frederic");
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frederic");
    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frederic");
  });
});
