import { presses } from ".";

describe("Multi-Tap SMS Tests", () => {
  function dotest(phrase: string, expected: number) {
    expect(presses(phrase)).toBe(expected);
  }

  describe("Basic Tests", () => {
    test("should work for lowercase letters", () => {
      dotest("abcdefghijklmnopqrstuvwxyz", 56);
    });

    test("should work for uppercase letters", () => {
      dotest("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 56);
    });

    test("should work for digits", () => {
      dotest("0123456789", 37);
    });

    test("should work for space and special characters", () => {
      dotest("# *", 3);
    });
  });

  describe("Simple phrases", () => {
    test("should work for simple words", () => {
      dotest("LOL", 9);
    });

    test("should work for phrases with spaces", () => {
      dotest("HOW R U", 13);
    });

    test("should work for phrases with numbers", () => {
      dotest("WHERE DO U WANT 2 MEET L8R", 47);
    });

    test("should allow phrases in lowercase", () => {
      dotest("lol", 9);
    });

    test("should handle phrases with digits", () => {
      dotest("0", 2);
      dotest("ZER0", 11);
      dotest("1", 1);
      dotest("IS NE1 OUT THERE", 31);
    });

    test("should handle non-alphabetic characters", () => {
      dotest("#", 1);
      dotest("#codewars *rocks", 36);
    });
  });

  describe("Random tests", () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const nonletters = "0123456789#*";

    function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sampleSize(str: string, size: number): string[] {
      const arr = [...str];
      const result: string[] = [];
      while (result.length < size && arr.length > 0) {
        const index = getRandomInt(0, arr.length - 1);
        result.push(arr[index]);
        arr.splice(index, 1);
      }
      return result;
    }

    function shuffle<T>(arr: T[]): T[] {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function genRandomPhrase(len: number): string {
      const words: string[][] = [];
      while (len > 0) {
        const lcSize = getRandomInt(0, Math.min(10, len));
        const lcWord = sampleSize(lowercase, lcSize);
        len -= lcWord.length;
        words.push(lcWord);

        const ucSize = getRandomInt(0, Math.min(10, len));
        const ucWord = sampleSize(uppercase, ucSize);
        len -= ucWord.length;
        words.push(ucWord);

        const nlSize = getRandomInt(0, Math.min(6, len));
        const nlWord = sampleSize(nonletters, nlSize);
        len -= nlWord.length;
        words.push(nlWord);
      }
      return shuffle(words)
        .map((w) => w.join(""))
        .filter((w) => w.length)
        .join(" ");
    }

    function refsol(phrase: string): number {
      const counts = "214444454512312312312312312341231234";
      const getClicks = (c: string): number =>
        "* #".includes(c)
          ? 1
          : isNaN(+c)
          ? +counts[c.charCodeAt(0) - "A".charCodeAt(0) + 10]
          : +counts[+c];
      return [...phrase.toUpperCase()].reduce(
        (acc, c) => acc + getClicks(c),
        0
      );
    }

    test("Shorter phrases tests", () => {
      for (let i = 0; i < 50; ++i) {
        const len = getRandomInt(1, 20);
        const phrase = genRandomPhrase(len);
        const expected = refsol(phrase);
        dotest(phrase, expected);
      }
    });

    test("Longer phrases tests", () => {
      for (let i = 0; i < 50; ++i) {
        const len = getRandomInt(30, 150);
        const phrase = genRandomPhrase(len);
        const expected = refsol(phrase);
        dotest(phrase, expected);
      }
    });
  });
});
