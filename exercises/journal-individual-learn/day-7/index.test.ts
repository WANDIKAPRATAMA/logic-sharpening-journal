import { isPangram } from ".";

describe("isPangram", () => {
  function tester(input: string, expected: boolean) {
    expect(isPangram(input)).toBe(expected);
  }

  it("Fixed Tests", () => {
    tester("The quick brown fox jumps over the lazy dog.", true);
    tester("This is not a pangram.", false);
    tester("abcdefghijklmnopqrstuvwxy .", false);
  });

  it("Randomized Tests", () => {
    const pangrams: [string, boolean][] = [
      ["This isn't a pangram!", false],
      ["abcdefghijklmopqrstuvwxyz ;", false],
      ["aaaaaaaaaaaaaaaaaaaaaaaaaa", false],
      ["Detect Pangram", false],
      [
        "A pangram is a sentence that contains every single letter of the alphabet at least once.",
        false,
      ],
      ["Cwm fjord bank glyphs vext quiz", true],
      ["Pack my box with five dozen liquor jugs.", true],
      ["How quickly daft jumping zebras vex.", true],
      ["ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ", true],
      ["AbCdEfGhIjKlM zYxWvUtSrQpOn", true],
    ];

    shuffle(pangrams).forEach(([input, expected]) => tester(input, expected));
  });

  it("Random Tests", () => {
    const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const punct = ".,;!?  ".split("");

    function generatePangram(): string {
      let chars: string[] = [...alpha]; // Start with an array of characters

      const extraLetters = randInt(0, 15);
      const extraPunct = randInt(0, 15);

      for (let i = 0; i < extraLetters; i++) {
        chars.push(sample(alpha)); // alpha is now an array
      }

      for (let i = 0; i < extraPunct; i++) {
        chars.push(sample(punct)); // punct is now an array
      }

      chars = chars.map((c) => (randInt(0, 1) === 0 ? c.toUpperCase() : c));
      return shuffle(chars).join("");
    }

    function generateNonPangram(): string {
      const pool: string[] = sampleSize(alpha, randInt(1, alpha.length)); // Ensure size is at least 1
      const extraLetters = pool.length > 0 ? randInt(0, 35) : 0;
      const extraPunct = randInt(0, 15);

      let chars: string[] = [];
      for (let i = 0; i < extraLetters; i++) {
        chars.push(sample(pool)); // pool is now correctly typed
      }

      for (let i = 0; i < extraPunct; i++) {
        chars.push(sample(punct)); // punct is now an array
      }

      chars = chars.map((c) => (randInt(0, 1) === 0 ? c.toUpperCase() : c));
      return shuffle(chars).join("");
    }

    const cases: [string, boolean][] = [];
    for (let i = 0; i < 100; i++) {
      cases.push([generatePangram(), true]);
      cases.push([generateNonPangram(), false]);
    }

    shuffle(cases).forEach(([input, expected]) => tester(input, expected));
  });
});

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sample<T>(array: T[]): T {
  return array[randInt(0, array.length - 1)];
}

function sampleSize<T>(array: T[], size: number): T[] {
  const copy = [...array];
  const result: T[] = [];

  while (result.length < size && copy.length > 0) {
    const index = randInt(0, copy.length - 1);
    result.push(copy[index]);
    copy.splice(index, 1);
  }

  return result;
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
