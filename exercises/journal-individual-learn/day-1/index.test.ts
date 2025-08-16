import { sum } from "./index";

describe("day-1: sum()", () => {
  it("should add two positives", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should handle negatives", () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
