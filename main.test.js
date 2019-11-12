import {
  getTime,
  todaysDate,
  secondsBetweenDates,
  hoursBetweenDates,
  minutesBetweenDates,
  daysBetweenDates,
  yesterday,
  yesterdayGreet
} from "./main.js";
var solution = require("./main");
import { pastTime } from "./main.js";

describe("if the user enters in a previous date, then there should be an alert", () => {
  test("yesterdays date", () => {
    const currentTime = new Date();
    const mockYesterdayDate = currentTime.setDate(currentTime.getDate() - 1);
    expect(solution.yesterday().toString()).toBe(`${mockYesterdayDate}`);
  });

  test("yesterday date alert", () => {
    expect(solution.yesterdayGreet()).toBe(alert("Leave the past in the past"));
  });
});

xtest("convert current date to milliseconds since epoch", () => {
  let todaysDate = new Date();
  expect(solution.getTime()).toBe(todaysDate.getTime());
});

xtest("Get todays date", () => {
  const mockedDate = new Date(2017, 10, 10);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  expect(todaysDate().toString()).toBe(`${mockedDate}`);
});

xtest("Get seconds between todays date & another date, inputs should be of form milliseconds since epoch", () => {
  const todaysDate = new Date().getTime();
  const givenDate = 1512864000000;

  expect(secondsBetweenDates(givenDate, todaysDate)).toBe(2592000);
});

xtest("Get minutes between todays date & another date, inputs should be of form milliseconds since epoch", () => {
  const todaysDate = new Date().getTime();
  const givenDate = 1512864000000;

  expect(minutesBetweenDates(givenDate, todaysDate)).toBe(43200);
});

xtest("Get hours between todays date & another date, inputs should be of form milliseconds since epoch", () => {
  const todaysDate = new Date().getTime();
  const givenDate = 1512864000000;

  expect(hoursBetweenDates(givenDate, todaysDate)).toBe(720);
});

xtest("Get days between todays date & another date, inputs should be of form milliseconds since epoch", () => {
  const todaysDate = new Date().getTime();
  const givenDate = 1512864000000;
  expect(daysBetweenDates(givenDate, todaysDate)).toBe(30);
});

xtest("convert current date to milliseconds since epoch", () => {
  let todaysDate = new Date();
  expect(solution.getTime()).toBe(todaysDate.getTime());
});

xtest("Mock Date", () => {
  const mockedDate = new Date(2017, 10, 10);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  expect(todaysDate().toString()).toBe(`${mockedDate}`);
});
