import { greet, getTime, todaysDate } from "./main.js";
var solution = require("./main");
import { pastTime } from "./main.js";

test("outputs fullname from ", () => {
  expect(solution.pastTime()).toBe("11/10/2018");
});

test("Previous Date", () => {
  const yesterday = new Date(11, 10, 2019);
  const today = new Date();

  expect(yesterday);
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
