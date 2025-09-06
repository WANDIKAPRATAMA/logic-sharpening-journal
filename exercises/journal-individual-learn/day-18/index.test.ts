import { describe, it, expect } from "@jest/globals";
import { arrayDiff } from ".";

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
    expect(arrayDiff([1, 2, 2], [2])).toEqual([1]);
    expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
    expect(arrayDiff([], [1, 2])).toEqual([]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
  });
});

describe("Random tests", () => {
  const array_diff_sol = (a: number[], b: number[]) =>
    a.filter((e) => !b.includes(e));

  function shuffle<T>(arr: T[]): T[] {
    for (let cIdx = arr.length - 1; cIdx > 0; cIdx--) {
      const rIdx = Math.floor(Math.random() * (cIdx + 1));
      [arr[cIdx], arr[rIdx]] = [arr[rIdx], arr[cIdx]];
    }
    return arr;
  }

  const generateRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < 40; i++) {
    it(`Testing for random test #${i + 1}`, () => {
      const aLength = generateRandomInt(0, 20);
      const bLength = generateRandomInt(0, aLength);
      const a: number[] = [];
      for (let j = 0; j < aLength; j++) {
        a.push(generateRandomInt(0, 40) - 20);
      }
      const b = shuffle([...a]).slice(0, bLength);
      const expected = array_diff_sol(a, b);
      expect(arrayDiff(a, b)).toEqual(expected);
    });
  }
});
