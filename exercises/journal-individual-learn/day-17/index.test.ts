import { describe, it, expect } from "@jest/globals";
import { abbreviate } from ".";

function tester(input: string, expected: string) {
  expect(abbreviate(input)).toBe(expected);
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sample<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function sampleSize<T>(array: T[], n: number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

function range(start: number, end?: number): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function times<T>(n: number, iteratee: (index: number) => T): T[] {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(iteratee(i));
  }
  return result;
}

function tail<T>(array: T[]): T[] {
  return array.slice(1);
}

describe("abbreviate", () => {
  it("Single short words", () => {
    tester("Java", "J2a");
    tester("image", "i3e");
    tester("gitlab", "g4b");
  });

  it("Single long words", () => {
    tester("internationalization", "i18n");
    tester("accessibility", "a11y");
    tester("Accessibility", "A11y");
  });

  it("One letter words", () => {
    tester("X", "X");
  });

  it("Two letter words", () => {
    tester("Go", "Go");
  });

  it("Three letter words", () => {
    tester("XML", "XML");
  });

  it("With punctuation", () => {
    tester("Hello!! How are you today?", "H3o!! How are you t3y?");
  });

  it("Joined with a separator", () => {
    tester("adava-kadavra!", "a3a-k5a!");
    tester("example_git_branch", "e5e_git_b4h");
  });

  it("Surrounded", () => {
    tester("(parenthesized)", "(p11d)");
    tester('"quoted"', '"q4d"');
    tester("[bracketed]", "[b7d]");
  });

  it("Example sentences", () => {
    tester("elephant-rides are really fun!", "e6t-r3s are r4y fun!");
    tester(
      "You need, need not want, to complete this code-wars mission",
      "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n"
    );
  });

  it("Empty string", () => {
    tester("", "");
  });

  it("Only separators", () => {
    tester(":;=;:", ":;=;:");
  });

  describe("Random Tests", () => {
    it("Predefined words", () => {
      const joiners = [", ", "-", ": ", "; ", ". ", "'", "_", " "];
      const words = [
        "cat",
        "mat",
        "doggy",
        "balloon",
        "sits",
        "sat",
        "a",
        "is",
        "on",
        "the",
        "monolithic",
        "double-barreled",
      ];
      const words_abbreviated = [
        "cat",
        "mat",
        "d3y",
        "b5n",
        "s2s",
        "sat",
        "a",
        "is",
        "on",
        "the",
        "m8c",
        "d4e-b6d",
      ];
      const indices = range(words.length);

      for (let i = 0; i < 50; ++i) {
        const n_words = getRandomInt(1, words.length);
        const random_indices = sampleSize(indices, n_words);
        let input = words[random_indices[0]];
        let expected = words_abbreviated[random_indices[0]];

        tail(random_indices).forEach((e) => {
          const joiner = sample(joiners);
          input += joiner + words[e];
          expected += joiner + words_abbreviated[e];
        });

        tester(input, expected);
      }
    });

    it("Randomly generated words", () => {
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = lowercase.toUpperCase();

      const genLower = (n: number) =>
        times(n, () => sample([...lowercase])).join("");
      const genUpper = (n: number) =>
        times(n, () => sample([...uppercase])).join("");
      const genTitle = (n: number) => genUpper(1) + genLower(n - 1);

      const wordGens = [genLower, genUpper, genTitle];
      const genWord1 = () => sample([...(lowercase + uppercase)]);
      const genWord2 = () => sample(wordGens)(2);
      const genWord3 = () => sample(wordGens)(3);
      const genWordShort = () => sample(wordGens)(getRandomInt(4, 8));
      const genWordLong = () => sample(wordGens)(getRandomInt(10, 15));

      const genWord = () =>
        sample([genWord1, genWord2, genWord3, genWordShort, genWordLong])();
      const genWords = (limit: number) =>
        times(getRandomInt(1, limit), genWord);

      const genClean = () => genWords(4).join(" ");
      const genBracketed = () => {
        const brackets = sample([
          "''",
          '""',
          "<>",
          "()",
          "[]",
          "{}",
          "//",
          "__",
          "**",
        ]);
        return `${brackets[0]}${genClean()}${brackets[1]}`;
      };
      const genPuncted = () => genClean() + sample([...".,!?:;"]);
      const genMultiPuncted = () =>
        genClean() + sample(["...", "??", "?!", "!!!"]);
      const genSegmented = () => genWords(4).join(sample([...".-/|_"]));

      const genInput = () => {
        const segments = getRandomInt(1, 4);
        const gens = [genPuncted, genMultiPuncted, genSegmented, genBracketed];
        return times(segments, () => sample(gens)()).join(" ");
      };

      function refsol(input: string) {
        const find = /[a-z]{4,}/gi;
        function replace(match: string) {
          return match[0] + (match.length - 2) + match[match.length - 1];
        }
        return input.replace(find, replace);
      }

      for (let i = 0; i < 100; ++i) {
        const input = genInput();
        const expected = refsol(input);
        tester(input, expected);
      }
    });
  });
});
