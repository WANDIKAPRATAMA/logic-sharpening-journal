/* 

  ------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|  *  | |space| |  #  |
|     | |  0  | |     |
------- ------- -------


    assert.strictEqual(presses('LOL'    ),  9);
    assert.strictEqual(presses('HOW R U'), 13);
 */

import { measureExecutionTime } from "../../util/util";

// Create Structure

const KEYS = {
  1: ["1"],
  2: ["A", "B", "C", "2"],
  3: ["D", "E", "F", "3"],
  4: ["G", "H", "I", "4"],
  5: ["J", "K", "L", "5"],
  6: ["M", "N", "O", "6"],
  7: ["P", "Q", "R", "S", "7"],
  8: ["T", "U", "V", "8"],
  9: ["W", "X", "Y", "Z", "9"],
  "*": ["*"],
  space: ["space", "0"],
  "#": ["#"],
};

function isSpace(phrase: string): string {
  return phrase === " " ? "space" : phrase.toUpperCase();
}
function presses(phrase: string): number {
  // Splits and Get it: ["HOW","R", "U"]
  const splits = phrase.split("");
  // Initialize
  let result = 0;

  //Loop on Every single Child on the Array Splits
  for (let i = 0; i < splits.length; i++) {
    // First Case it: HOW
    const texts = splits[i].split("").map(isSpace);
    //Split How to ["H", "O", "W"]
    for (const t of texts) {
      // Case it: H & Loop on evrey Object Values
      for (const [_, values] of Object.entries(KEYS)) {
        // Compare when The Values includeds the Text
        if (values.includes(t)) {
          result += values.indexOf(t) + 1;
        }
      }
    }
  }

  return result;
}

// TODO: I Think this Solution is Best Practise, igot on Group Dicsuss on Solution Code wars
function pressesompare(phrase: string) {
  return phrase
    .toUpperCase()
    .split("")
    .reduce((acc, item) => {
      switch (item) {
        case "1":
        case "A":
        case "D":
        case "G":
        case "J":
        case "M":
        case "P":
        case "T":
        case "W":
        case " ":
        case "*":
        case "#":
          acc += 1;
          break;
        case "B":
        case "E":
        case "H":
        case "K":
        case "N":
        case "Q":
        case "U":
        case "X":
        case "0":
          acc += 2;
          break;
        case "C":
        case "F":
        case "I":
        case "L":
        case "O":
        case "R":
        case "V":
        case "Y":
          acc += 3;
          break;
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "8":
        case "S":
        case "Z":
          acc += 4;
          break;
        case "7":
        case "9":
          acc += 5;
          break;
      }

      return acc;
    }, 0);
}

if (require.main === module) {
  const SIMPLE_TESTS = [
    ["LOL", 9],
    ["HOW R U", 13],
    ["lol", 9],
  ];

  const c1 = measureExecutionTime(() =>
    SIMPLE_TESTS.forEach(([phrase, expected]) => {
      const calculate = presses(phrase as string);
      console.log(calculate === expected ? "Test Passed" : "Test Failed");
    })
  );

  const c2 = measureExecutionTime(() =>
    SIMPLE_TESTS.forEach(([phrase, expected]) => {
      const calculate = pressesompare(phrase as string);
      console.log(calculate === expected ? "Test Passed" : "Test Failed");
    })
  );

  console.log("Compare 1:", c1.durationMs.toFixed(2), "ms");
  console.log("Compare 2:", c2.durationMs.toFixed(2), "ms");
}

export { presses };
