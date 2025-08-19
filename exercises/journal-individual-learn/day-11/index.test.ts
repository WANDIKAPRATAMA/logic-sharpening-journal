import { matrixfy } from ".";

describe("Tests", () => {
  it("Basic Tests", () => {
    expect(matrixfy("")).toBe("name must be at least one letter");
    expect(matrixfy("G")).toEqual([["G"]]);
    expect(matrixfy("Beyonce")).toEqual([
      ["B", "e", "y"],
      ["o", "n", "c"],
      ["e", ".", "."],
    ]);
    expect(matrixfy("Bill")).toEqual([
      ["B", "i"],
      ["l", "l"],
    ]);
    expect(matrixfy("Frank")).toEqual([
      ["F", "r", "a"],
      ["n", "k", "."],
      [".", ".", "."],
    ]);
  });

  function solution(str: string) {
    if (!str.length) return "name must be at least one letter";
    let width = Math.ceil(Math.sqrt(str.length));
    let paddedStr = `${str}${".".repeat(width ** 2 - str.length)}`;
    let regex = RegExp(".".repeat(width), "g");
    return paddedStr.match(regex)?.map((chunk) => [...chunk]) || [];
  }

  function randInt(from: number, to: number): number {
    return Math.floor(from + Math.random() * (to - from + 1));
  }

  function createRandomStr(): string {
    const a = "a".codePointAt(0) || 97,
      z = "z".codePointAt(0) || 122;
    const length = randInt(0, 30);
    return String.fromCodePoint(...Array.from({ length }, () => randInt(a, z)));
  }

  it("Random Tests", () => {
    for (let i = 0; i < 50; i++) {
      const randomStr = createRandomStr();
      const expected = solution(randomStr);
      const actual = matrixfy(randomStr);
      expect(actual).toEqual(expected);
    }
  });
});
