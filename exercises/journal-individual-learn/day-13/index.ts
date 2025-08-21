import { measureExecutionTime } from "../../util/util";

/* 

Help
+--------+-------+
| Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+
*/
const OBJ_ROMAN: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
class RomanNumerals {
  // TODO: Replace with new actual loop because this condition is too slow
  //   !Bottleneck
  //   static toRoman(num: number): string {
  //     let value = "";
  //     const keys = Object.keys(OBJ_ROMAN);
  //     while (num > 0) {
  //       for (let i = 0; i < keys.length; i++) {
  //         if (OBJ_ROMAN[keys[i]] <= num && OBJ_ROMAN[keys[i - 1 + 1]] >= num) {
  //           num -= OBJ_ROMAN[keys[i]];
  //           value += keys[i];
  //         }
  //       }
  //     }
  //     return value;
  //   }
  static toRoman(num: number): string {
    let value = "";
    const keys = Object.keys(OBJ_ROMAN).sort(
      (a, b) => OBJ_ROMAN[b] - OBJ_ROMAN[a]
    );

    for (const key of keys) {
      while (num >= OBJ_ROMAN[key]) {
        value += key;
        num -= OBJ_ROMAN[key];
      }
    }

    return value;
  }
  static fromRoman(str: string): number {
    const tokens = this.tokenize(str);
    let result = 0;
    for (let i = 0; i < tokens.length; i++) {
      for (const key in OBJ_ROMAN) {
        if (key === tokens[i]) {
          result += OBJ_ROMAN[key];
        }
      }
    }
    return result;
  }
  //   !Bottleneck
  //   static tokenize(str: string): string[] {
  //     console.log("Started Tokenize ");
  //     const tokens: string[] = [];
  //     const keys = Object.keys(OBJ_ROMAN).sort((a, b) => b.length - a.length);

  //     // TODO: Replace with new actual loop because this condition is too slow
  //     // for (let i = 0; i < str.length; i++) {
  //     //   for (const key of keys) {
  //     //     console.log(str, key);
  //     //     if (str.startsWith(key)) {
  //     //       tokens.push(key);
  //     //       str = str.slice(key.length);
  //     //       i += key.length;
  //     //     }
  //     //     console.log("Remaining str", str);
  //     //   }
  //     // }

  //     // let i = 0;
  //     // while (i < str.length) {
  //     //   for (const key of keys) {
  //     //     if (str.startsWith(key, i)) {
  //     //       tokens.push(key);
  //     //       i += key.length;
  //     //       break;
  //     //     }
  //     //   }
  //     // }

  //     // return tokens;

  //     console.log("Finished Tokenize ", tokens);
  //     return tokens;
  //   }
  static tokenize(str: string): string[] {
    const tokens: string[] = [];
    const keys = Object.keys(OBJ_ROMAN).sort((a, b) => b.length - a.length);

    let i = 0;
    while (i < str.length) {
      for (const key of keys) {
        if (str.startsWith(key, i)) {
          tokens.push(key);
          i += key.length;
          break;
        }
      }
    }

    return tokens;
  }
}

if (require.main === module) {
  const { result, durationMs } = measureExecutionTime(() =>
    RomanNumerals.toRoman(4)
  );
  //   console.log("========================");
  //   console.log("Hasil:", result);
  //   console.log("Durasi:", durationMs.toFixed(2), "ms");

  //   console.log("========================");
  const { result: result2, durationMs: durationMs2 } = measureExecutionTime(
    () => RomanNumerals.fromRoman("MDCLXVI")
  );
  console.log("Hasil:", result2);
  console.log("Durasi:", durationMs2.toFixed(2), "ms");
  console.log("========================");
}

export { RomanNumerals };
