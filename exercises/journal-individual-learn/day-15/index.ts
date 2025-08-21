/* 
Given an array of prices [3, 10, 8, 4], the best profit you could make would be 7 because you buy at 3 first, then sell at 10.

Input:
A list of prices (integers), of length 2 or more.
*/

function maxProfit(prices: number[]): number {
  // return prices.sort().reduce((acc, num, i) =>
  // {

  // }

  //     , 0);
  // TODO: Its Wriong solution cannot sorted the prices cause its runtime of seels or dat started
  //   const sorted = prices.sort((a, b) => a - b);
  //   console.log("🚀 ~ maxProfit ~ prices:", prices);
  //   const first = sorted.shift();
  //   const last = sorted.pop();

  //   return last && first ? last - first : 0;

  //   return prices.reduce((acc, num, i) => {
  //     return (acc = Math.min(acc, acc - num));
  //   }, 0);

  let minSoFar = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minSoFar;
    maxProfit = Math.max(maxProfit, profit);
    minSoFar = Math.min(minSoFar, prices[i]);
  }

  return maxProfit;
}

if (require.main === module) {
  console.log(maxProfit([10, 7, 5, 4, 1])); // Expected 7
}

export { maxProfit };
