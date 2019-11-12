var solution = require("./main");
import { greet, getTime } from "./main.js";

test("outputs fullname from ", () => {
  expect(solution.greet()).toBe("Hello, My name is Adam Kovacs");
});

test("convert current date to milliseconds since epoch", () => {
  let todaysDate = new Date();
  expect(solution.getTime()).toBe(todaysDate.getTime());
});
