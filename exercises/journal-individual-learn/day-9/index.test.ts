import { playPacMan } from ".";

describe("Pacman tests", () => {
  it("Should return the path", () => {
    expect(
      playPacMan(
        [
          ["D", "D", "P"],
          ["D", "W", "E"],
          ["D", "D", "D"],
        ],
        [0, 2]
      )
    ).toEqual([
      [0, 2],
      [1, 2],
      [2, 2],
    ]);
  });
});
