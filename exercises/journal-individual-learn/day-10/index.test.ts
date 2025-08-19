import { roundRobin } from ".";

describe("Tests", () => {
  it("Basic Tests", () => {
    expect(roundRobin([10], 4, 0)).toBe(10);
    expect(roundRobin([10, 20], 5, 0)).toBe(15);
    expect(roundRobin([10, 20, 1, 2, 3], 5, 2)).toBe(11);
    expect(roundRobin([10, 20, 1, 2, 3], 5, 0)).toBe(21);
    expect(roundRobin([10, 20, 1, 2, 3], 4, 2)).toBe(9);
    expect(roundRobin([10, 20, 1, 2, 3], 4, 3)).toBe(11);
  });

  /**
   * Returns a random integer between `a` and `b` inclusive.
   * @param {number} a The lower bound.
   * @param {number} b The upper bound.
   * @returns {number} A random integer between `a` and `b` inclusive.
   */
  function randint(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function roundSol(jobs: number[], slice: number, index: number): number {
    let totalTime = 0;
    let i = 0;
    while (jobs[index] > 0) {
      const proc = Math.min(slice, jobs[i % jobs.length]);
      jobs[i % jobs.length] -= proc;
      totalTime += proc;
      i++;
    }
    return totalTime;
  }

  describe("Random Tests", () => {
    for (let j = 0; j < 100; j++) {
      const arrlen = randint(3, 7);
      const testjobs: number[] = [];
      for (let q = 0; q < arrlen; q++) {
        testjobs.push(randint(1, 30));
      }
      const testslice = randint(1, 25);
      const testindex = randint(0, arrlen - 1);
      const message = `Testing for roundRobin([${testjobs}], ${testslice}, ${testindex})`;
      it(message, () => {
        const expected = roundSol([...testjobs], testslice, testindex);
        const actual = roundRobin(testjobs, testslice, testindex);
        expect(actual).toBe(expected);
      });
    }
  });
});
