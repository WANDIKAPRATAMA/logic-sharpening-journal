import { each } from ".";

describe("Basic tests", () => {
  const basicTests: [number, number[], number[]][] = [
    [1, [], []],
    [-1, [], []],
    [0, [], []],
    [0, [1, 2, 3, 4, 5, 6], []],
    [1, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
    [-1, [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]],
    [2, [1, 2, 3, 4, 5, 6], [2, 4, 6]],
    [-2, [1, 2, 3, 4, 5, 6], [5, 3, 1]],
    [3, [1, 2], []],
    [-3, [1, 2], []],
    [5, [1, 2, 3, 4, 5, 6, 7], [5]],
    [-5, [1, 2, 3, 4, 5, 6, 7], [3]],
  ];

  for (const [n, xs, expected] of basicTests) {
    it(`n = ${n}, xs = [${xs}]`, () => {
      expect(each(n, [...xs])).toEqual(expected);
    });
  }
});

describe("Advanced tests", () => {
  const advancedTests: [number, number[], string, number[]][] = [
    [1, range(1, 10000), "[1..10000]", range(1, 10000)],
    [2, range(5, 25000, 3), "[8,14..24998]", range(8, 24998, 6)],
    [-11, range(5, 36000, 3), "[35969,35936..32]", range(35969, 32, -33)],
    [
      -110,
      range(5, 360000, 35),
      "[356165,352315..1965]",
      range(356165, 1965, -3850),
    ],
  ];

  for (const [n, xs, desc, expected] of advancedTests) {
    it(`n = ${n}, xs = ${desc}`, () => {
      expect(each(n, [...xs])).toEqual(expected);
    });
  }
});

describe("Random tests", () => {
  function randrange(x: number, y: number): number {
    return Math.floor(Math.random() * (y - x)) + x;
  }

  function randint(x: number, y: number): number {
    return randrange(x, y + 1);
  }

  function reference(n: number, xs: number[]): number[] {
    const r: number[] = [];
    if (n > 0) {
      for (let i = n - 1; i < xs.length; i += n) {
        r.push(xs[i]);
      }
    } else if (n < 0) {
      for (let i = xs.length + n; i >= 0; i += n) {
        r.push(xs[i]);
      }
    }
    return r;
  }

  it("500 random tests", () => {
    for (let testId = 1; testId <= 500; testId++) {
      const xs = Array.from({ length: randint(0, 500 * testId) }, () =>
        randint(-10 * testId, 10 * testId)
      );
      const n = randint(-(xs.length + 50), xs.length + 50);
      const expected = reference(n, xs);
      expect(each(n, [...xs])).toEqual(expected);
    }
  });
});
function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  if (step === 0) return result;

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}
