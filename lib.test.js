/// <reference types="jest" />

import { arePasswordsEqual } from "./lib";

test("arePasswordsEqual should return false when passwords are not equal ", () => {
  const result = arePasswordsEqual("abcd", "asdf");
  expect(result).toBe(false);
});

test("arePasswordsEqual should return true when passwords are equal ", () => {
  const result = arePasswordsEqual("abc", "abc");
  expect(result).toBe(true);
});
