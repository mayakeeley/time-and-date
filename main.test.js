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
