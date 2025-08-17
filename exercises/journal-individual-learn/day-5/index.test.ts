// countOnes.test.ts

import { countOnes } from ".";

describe("countOnes", () => {
  test("should return 0 for range (0, 0)", () => {
    expect(countOnes(0, 0)).toBe(0n);
  });

  test("should return 1 for range (1, 1)", () => {
    expect(countOnes(1, 1)).toBe(1n);
  });

  test("should return 2 for range (1, 2)", () => {
    expect(countOnes(1, 2)).toBe(2n); // 1 (1) + 2 (10)
  });

  test("should return 3 for range (1, 3)", () => {
    expect(countOnes(1, 3)).toBe(4n); // 1 (1) + 2 (10) + 3 (11)
  });

  test("should return 8 for range (4, 7)", () => {
    expect(countOnes(4, 7)).toBe(8n); // 4 (100) + 5 (101) + 6 (110) + 7 (111)
  });

  test("should return 0 for negative range (-1, -1)", () => {
    expect(countOnes(-1, -1)).toBe(0n);
  });

  test("should return 0 for range (0, -1)", () => {
    expect(countOnes(0, -1)).toBe(0n);
  });
});
