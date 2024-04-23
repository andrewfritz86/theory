import { expect, test, describe } from "vitest";

import { getAccidentalsCount, getNotesInActiveScale } from "./helpers";
import data from "../data.json";

const { notes, scales } = data;
describe("Helpers", () => {
  describe("GetNotesInActiveScale", () => {
    test("It correctly finds the notes in C major", () => {
      const cMajor = {
        name: "C Major",
        id: 1,
        notes: [1, 3, 5, 6, 8, 10, 13],
        root_note_id: 1,
      };
      const result = getNotesInActiveScale(data.notes, cMajor);
      const notes = result.map((n) => n.id);
      expect(notes).toEqual([1, 3, 5, 6, 8, 10, 13]);
    });
  });
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
