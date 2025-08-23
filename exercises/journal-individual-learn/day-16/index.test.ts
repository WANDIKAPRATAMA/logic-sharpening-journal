// chess.test.ts

import { piecesValue } from ".";

const hash: { [key: string]: number } = Object.freeze({
  queen: 9,
  rook: 5,
  bishop: 3,
  knight: 3,
  pawn: 1,
});

function generateTable(): string[][] {
  const pieces: [string, number][] = [
    ["w-pawn", 8],
    ["b-pawn", 8],
    ["w-knight", 2],
    ["b-knight", 2],
    ["w-bishop", 2],
    ["b-bishop", 2],
    ["w-queen", 1],
    ["b-queen", 1],
    ["b-rook", 2],
    ["w-rook", 2],
  ];

  let a: number, b: number;
  const c = Math.floor(Math.random() * 20 + 1);
  const arr: string[][] = Array.from(Array(8)).map(() => [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  for (let i = 0; i < c; i++) {
    a = Math.floor(Math.random() * 8);
    b = Math.floor(Math.random() * 8);
    if (arr[a][b] !== " ") continue;
    if (i === 0) {
      arr[a][b] = "w-king";
      continue;
    } else if (i === 1) {
      arr[a][b] = "b-king";
      continue;
    }
    const t = pieces[Math.floor(Math.random() * pieces.length)];
    if (t[1] > 0) {
      arr[a][b] = t[0];
      t[1]--;
    }
  }
  return arr;
}

describe("Testing", () => {
  test("Fixed test cases", () => {
    const r1 = [
      ["b-bishop", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
      [" ", "b-king", " ", "b-pawn", "w-rook", " ", " ", " "],
      [" ", " ", " ", " ", "w-pawn", " ", " ", " "],
      [" ", " ", " ", " ", " ", "w-bishop", " ", " "],
      ["w-king", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", "b-pawn", "b-pawn", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
    ];
    const r2 = [
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", "b-king", " ", " "],
      [" ", "b-knight", " ", " ", "w-pawn", " ", " ", " "],
      [" ", " ", "w-bishop", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "w-pawn", " ", " ", " ", "w-pawn", " ", " "],
      [" ", " ", " ", " ", "b-pawn", " ", " ", " "],
      [" ", "w-rook", " ", " ", " ", "w-king", " ", " "],
    ];
    const r3 = [
      [" ", " ", " ", " ", "b-king", " ", " ", " "],
      [" ", "b-bishop", " ", " ", "b-pawn", "b-pawn", " ", " "],
      [" ", " ", " ", " ", "b-knight", " ", " ", " "],
      [" ", " ", "w-queen", " ", " ", " ", " ", " "],
      [" ", "w-bishop", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", "b-rook"],
      [" ", "w-pawn", "w-pawn", " ", " ", " ", " ", " "],
      [" ", " ", "w-king", " ", " ", " ", " ", " "],
    ];

    expect(piecesValue(r1, "white")).toBe(18);
    expect(piecesValue(r1, "black")).toBe(15);
    expect(piecesValue(r2, "white")).toBe(11);
    expect(piecesValue(r2, "black")).toBe(4);
    expect(piecesValue(r3, "white")).toBe(14);
    expect(piecesValue(r3, "black")).toBe(13);
  });

  test("Random test cases", () => {
    for (let i = 0; i < 100; i++) {
      const arr = generateTable();
      const side: "white" | "black" = Math.random() < 0.5 ? "black" : "white";
      const message = `chessboard = \n\n[\n${arr
        .map((x) => JSON.stringify(x))
        .join("\n")}\n]\n\nside = ${side}\n\n`;
      expect(piecesValue(arr, side)).toBe(piecesValue(arr, side));
    }
  });
});
