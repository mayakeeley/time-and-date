var solution = require("./main");
import { greet } from "./main.js";
import { todaysDate } from "./main.js";

test("outputs fullname from ", () => {
  expect(solution.greet()).toBe("Hello, My name is Adam Kovacs");
});

test("Mock Date", () => {
  const mockedDate = new Date(2017, 10, 10);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  expect(todaysDate().toString()).toBe(`${mockedDate}`);
});
