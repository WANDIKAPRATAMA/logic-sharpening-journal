import { maxProfit } from "."; // Adjust the import based on your file structure

describe("Profit", () => {
  it("example tests", () => {
    expect(maxProfit([10, 7, 5, 8, 11, 9])).toBe(6);
    expect(maxProfit([3, 4])).toBe(1);
    expect(maxProfit([9, 9])).toBe(0);
    expect(maxProfit([10, 7, 5, 4, 1])).toBe(-1);
  });

  it("fixed tests", () => {
    expect(maxProfit([3, 10, 8, 4])).toBe(7);
  });

  it("random tests (small)", () => {
    for (let i = 1; i <= 100; i++) {
      const prices: number[] = rndPrices(5, 20);
      const message = `maxProfit(${
        prices.length < 50
          ? JSON.stringify(prices)
          : `[ <${prices.length} prices> ]`
      })`;
      const expected = refMaxProfit(prices);
      const actual = maxProfit(prices);
      expect(actual).toBe(expected);
    }
  });

  it("random tests (medium)", () => {
    for (let i = 1; i <= 100; i++) {
      const prices: number[] = rndPrices(20, 2000);
      const message = `maxProfit(${
        prices.length < 50
          ? JSON.stringify(prices)
          : `[ <${prices.length} prices> ]`
      })`;
      const expected = refMaxProfit(prices);
      const actual = maxProfit(prices);
      expect(actual).toBe(expected);
    }
  });

  it("random tests (large)", () => {
    for (let i = 1; i <= 100; i++) {
      const prices: number[] = rndPrices(40000, 60000);
      const message = `maxProfit(${
        prices.length < 50
          ? JSON.stringify(prices)
          : `[ <${prices.length} prices> ]`
      })`;
      const expected = refMaxProfit(prices);
      const actual = maxProfit(prices);
      expect(actual).toBe(expected);
    }
  });

  it("random tests (unbiased)", () => {
    for (let i = 1; i <= 100; i++) {
      const prices: number[] = rndUnbiasedPrices(i);
      const message = `maxProfit(${
        prices.length < 50
          ? JSON.stringify(prices)
          : `[ <${prices.length} prices> ]`
      })`;
      const expected = refMaxProfit(prices);
      const actual = maxProfit(prices);
      expect(actual).toBe(expected);
    }
  });
});

function refMaxProfit(prices: number[]): number {
  let profit = prices[1] - prices[0];
  let lowestPrice = Math.min(prices[0], prices[1]);
  for (let i = 2; i in prices; i++) {
    profit = Math.max(profit, prices[i] - lowestPrice);
    lowestPrice = Math.min(lowestPrice, prices[i]);
  }
  return profit;
}

const rnd = (m: number, n: number = 0): number =>
  Math.floor(Math.random() * (n - m) + m);

const scanl1 = (fn: (x: number, y: number) => number) =>
  function (xs: number[]) {
    for (let i = 1; i in xs; i++) xs[i] = fn(xs[i - 1], xs[i]);
    return xs;
  };

const plus = (x: number, y: number): number => y + x;

function rndPrices(minSize: number, maxSize: number): number[] {
  const length = rnd(minSize, maxSize);
  const k = Math.ceil(Math.sqrt(length));
  const diffRange = rnd(8) ? [-k, k] : [-2 * k, -rnd(k)];
  const prices = scanl1(plus)(
    Array.from({ length }, () => rnd(diffRange[0], diffRange[1]))
  );
  const m = rnd(k) - prices.reduce((x, y) => Math.min(x, y));
  return prices.map((price) => price + m);
}

const rndUnbiasedPrices = (size: number): number[] =>
  Array.from({ length: rnd(2, Math.max(2, size)) }, () => rnd(size));
