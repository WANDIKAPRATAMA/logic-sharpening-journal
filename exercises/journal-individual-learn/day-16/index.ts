const HASH = {
  queen: 9,
  rook: 5,
  bishop: 3,
  knight: 3,
  pawn: 1,
};

function piecesValue(arr: string[][], s: "white" | "black"): number {
  let currValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      // @ts-ignore
      if ((arr[i] as string).split("-")[0] === s.charAt(0)) {
        // @ts-ignore
        if (HASH[(arr[i] as string).split("-")[1]]) {
          // @ts-ignore
          currValue += HASH[
            // @ts-ignore
            (arr[i] as keyof typeof HASH).split("-")[1]
          ] as number;
        }
      }
    } else {
      // @ts-ignore
      currValue += piecesValue(arr[i], s);
    }
  }

  return currValue;
}

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
if (require.main === module) {
  console.log(piecesValue(r1, "white")); ///should be 18;
}

export { piecesValue };
