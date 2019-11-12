import { getTime, todaysDate, secondsBetweenDates } from "./main.js";
var solution = require("./main");

test("convert current date to milliseconds since epoch", () => {
  let todaysDate = new Date();
  expect(solution.getTime()).toBe(todaysDate.getTime());
});

test("Get todays date", () => {
  const mockedDate = new Date(2017, 10, 10);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  expect(todaysDate().toString()).toBe(`${mockedDate}`);
});

test("Get seconds between todays date & another date", () => {
  const todaysDate = new Date().getTime();
  const givenDate = 1512864000000;

  expect(secondsBetweenDates(todaysDate, givenDate)).toBe(-2592000000000);
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
