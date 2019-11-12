var solution = require("./main");
import { greet } from "./main.js";

test("outputs fullname from ", () => {
  expect(solution.greet()).toBe("Hello, My name is Adam Kovacs");
});
