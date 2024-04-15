import { expect, test, describe } from "vitest";

import { getAccidentalsCount } from "./helpers";
import data from "../data.json";

const { notes, scales } = data;
describe("Helpers", () => {
  describe("GetAccidentalsCount", () => {
    describe("For C Major", () => {
      test("correctly counts accidental notes", () => {
        expect(getAccidentalsCount(scales[0], notes)).toBe(0);
      });
    });
    describe("For G Major", () => {
      test("correctly counts accidental notes", () => {
        expect(getAccidentalsCount(scales[1], notes)).toBe(1);
      });
    });
    describe("For D Major", () => {
      test("correctly counts accidental notes", () => {
        expect(getAccidentalsCount(scales[2], notes)).toBe(2);
      });
    });
    describe("For A Major", () => {
      test("correctly counts accidental notes", () => {
        expect(getAccidentalsCount(scales[3], notes)).toBe(3);
      });
    });
    describe("For E Major", () => {
      test("correctly counts accidental notes", () => {
        expect(getAccidentalsCount(scales[4], notes)).toBe(4);
      });
    });
    describe("For B Major", () => {
      test("correctly counts accidental notes", () => {
        expect(getAccidentalsCount(scales[5], notes)).toBe(5);
      });
    });
  });
});
