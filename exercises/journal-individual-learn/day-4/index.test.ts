import { zeros } from ".";
// 6!

// ⌊6/5⌋ = 1

// ⌊6/25⌋ = 0
// Total = 1 → ada 1 trailing zero.

// 12!

// ⌊12/5⌋ = 2 (faktor dari 5 dan 10)

// ⌊12/25⌋ = 0
// Total = 2 → ada 2 trailing zeros.

// 100!

// ⌊100/5⌋ = 20

// ⌊100/25⌋ = 4

// ⌊100/125⌋ = 0
// Total = 24 → jadi 100! punya 24 nol di belakang.
describe("day-4", () => {
  it("should return 1", () => {
    expect(zeros(6)).toBe(1);
  });
  it("should return 2", () => {
    expect(zeros(12)).toBe(2);
  });
  it("should return 24", () => {
    expect(zeros(100)).toBe(24);
  });
});
