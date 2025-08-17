// TODO: Replace with a more efficient solution
// function calculateBiner(num: number): string {
//   if (num === 0) return "0";

//   let biner = "";
//   while (num > 0) {
//     biner = (num % 2) + biner;
//     num = Math.floor(num / 2);
//   }
//   return biner;
// }

// function countOnes(left: number, right: number): number {
//   let result = 0;

//   for (let i = left; i <= right; i++) {
//     console.log(`Current iterator at ${i}`);
//     const binner = calculateBiner(i);
//     console.log(`Value binner is ${binner}`);
//     result += binner.replaceAll("0", "").split("").length;
//   }

//   return result;
// }

function countOnesUntil(n: number): bigint {
  if (n < 0) return 0n;

  let total = 0n;
  let bit = 0n;

  while (1n << bit <= BigInt(n)) {
    const cycleLen = 1n << (bit + 1n);
    const fullCycles = (BigInt(n) + 1n) / cycleLen;
    const remainder = (BigInt(n) + 1n) % cycleLen;

    const onesFromFullCycles = fullCycles * (1n << bit);
    const onesFromRemainder =
      remainder > 1n << bit ? remainder - (1n << bit) : 0n;

    total += onesFromFullCycles + onesFromRemainder;

    bit++;
  }

  return total;
}

function countOnes(left: number, right: number): bigint {
  return countOnesUntil(right) - countOnesUntil(left - 1);
}

if (require.main === module) console.log(countOnes(4, 7));
export { countOnes };
