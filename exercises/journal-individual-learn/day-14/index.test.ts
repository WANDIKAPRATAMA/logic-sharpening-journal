import { sortTheInnerContent } from ".";

describe("Kata tests", () => {
  it("Example tests", () => {
    expect(
      sortTheInnerContent("sort the inner content in descending order")
    ).toBe("srot the inner ctonnet in dsnnieedcg oredr");
    expect(sortTheInnerContent("wait for me")).toBe("wiat for me");
    expect(sortTheInnerContent("this kata is easy")).toBe("tihs ktaa is esay");
  });

  it("Random tests", () => {
    function mySortTheInnerContent(words: string) {
      return words
        .split(" ")
        .map((w) => {
          if (w.length < 3) {
            return w;
          }
          return (
            w[0] +
            w
              .slice(1, w.length - 1)
              .split("")
              .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
              .join("") +
            w[w.length - 1]
          );
        })
        .join(" ");
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let r = 0; r < 40; r++) {
      let wordCount = Math.floor(Math.random() * 10 + 1);
      let wordsArray = [];
      for (let w = 0; w < wordCount; w++) {
        let wordArray = [];
        let wordLength = Math.floor(Math.random() * 10 + 1);
        for (let wi = 0; wi < wordLength; wi++) {
          wordArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        }
        wordsArray.push(wordArray.join(""));
      }
      let words = wordsArray.join(" ");
      let expected = mySortTheInnerContent(words);
      expect(sortTheInnerContent(words)).toBe(expected);
    }
  });
});
