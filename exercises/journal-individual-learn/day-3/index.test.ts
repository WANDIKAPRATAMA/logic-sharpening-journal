import { makeChange } from ".";

describe("day-3: makeChange()", () => {
  it("should return {}", () => {
    expect(makeChange(0)).toStrictEqual({});
  });
  it("input = 1  => output = {'P': 1}", () => {
    expect(makeChange(1)).toStrictEqual({
      P: 1,
    });
  });
  it("input = 43 => output = {'Q': 1, 'D': 1, 'N': 1, 'P': 3}", () => {
    expect(makeChange(43)).toStrictEqual({
      Q: 1,
      D: 1,
      N: 1,
      P: 3,
    });
  });
  it("input = 91 => output = {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}", () => {
    expect(makeChange(91)).toStrictEqual({
      H: 1,
      Q: 1,
      D: 1,
      N: 1,
      P: 1,
    });
  });
});
