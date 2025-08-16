/* 
Making Change
Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols/strings H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

Examples
input = 0  => output = {}
input = 1  => output = {'P': 1}
input = 43 => output = {'Q': 1, 'D': 1, 'N': 1, 'P': 3}
input = 91 => output = {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}

*/
/* 
✨ Contoh Walkthrough
Input: 91

H = 50 → ambil 1 (sisa 41)

Q = 25 → ambil 1 (sisa 16)

D = 10 → ambil 1 (sisa 6)

N = 5 → ambil 1 (sisa 1)

P = 1 → ambil 1 (sisa 0)
➡️ Hasil: { H: 1, Q: 1, D: 1, N: 1, P: 1 }
*/

type Coin = keyof typeof RULES_AMOUNT;
type Result = {
  [key in Coin]: number;
};
const RULES_AMOUNT = {
  H: 50,
  Q: 25,
  D: 10,
  N: 5,
  P: 1,
};

const makeChange = (amount: number): Result => {
  // TODO
  let result = {} as Result;
  const keys = Object.keys(RULES_AMOUNT) as Coin[];
  let currIndex = 0;
  if (amount === 0) {
    return result;
  }

  while (amount > 0) {
    const calculate = Math.floor(amount / RULES_AMOUNT[keys[currIndex]]);
    if (calculate > 0) {
      if (result[keys[currIndex]]) {
        result[keys[currIndex]] = result[keys[currIndex]] + 1;
      } else {
        result[keys[currIndex]] = 1;
      }
      amount -= RULES_AMOUNT[keys[currIndex]];
    } else {
      currIndex++;
    }
  }
  return result;
};

if (require.main === module) {
  console.log(makeChange(43));
}

export { makeChange };
