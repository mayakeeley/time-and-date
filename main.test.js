import { greet, getTime, todaysDate } from "./main.js";
var solution = require("./main");

test("outputs fullname from ", () => {
  expect(solution.greet()).toBe("Hello, My name is Adam Kovacs");
});

test("convert current date to milliseconds since epoch", () => {
  let todaysDate = new Date();
  expect(solution.getTime()).toBe(todaysDate.getTime());
});

test("Mock Date", () => {
  const mockedDate = new Date(2017, 10, 10);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  expect(todaysDate().toString()).toBe(`${mockedDate}`);
});
