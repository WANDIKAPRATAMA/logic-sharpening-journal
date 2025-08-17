import { isAValidMessage } from ".";

describe("Solution", () => {
  it("test1", () => {
    expect(isAValidMessage("3hey5hello2hi")).toBe(true);
  });

  it("test2", () => {
    expect(isAValidMessage("4code13hellocodewars")).toBe(true);
  });

  it("test3", () => {
    expect(isAValidMessage("3hey5hello2hi5")).toBe(false);
  });

  it("test4", () => {
    expect(isAValidMessage("code4hello5")).toBe(false);
  });

  it("test5", () => {
    expect(isAValidMessage("1a2bb3ccc4dddd5eeeee")).toBe(true);
  });

  it("test6", () => {
    expect(isAValidMessage("")).toBe(true);
  });

  it("testRandom1", () => {
    const count1 = randInt(500, 1000);
    const count2 = randInt(500, 1000);
    const part1 = randomString(count1);
    const part2 = randomString(count2);
    const input = shuffle([
      count1.toString(),
      count2.toString(),
      part1,
      part2,
    ]).join("");
    expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
  });

  it("testRandom2", () => {
    const count1 = randInt(50, 100);
    const part1 = randomString(count1);
    const input = shuffle([count1.toString(), part1]).join("");
    expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
  });

  it("testRandom3", () => {
    const count1 = randInt(500, 1000);
    const count2 = randInt(500, 1000);
    const count3 = randInt(500, 1000);
    const part1 = randomString(count1);
    const part2 = randomString(count2);
    const part3 = randomString(count3);
    const input = shuffle([
      count1.toString(),
      count2.toString(),
      count3.toString(),
      part1,
      part2,
      part3,
    ]).join("");
    expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
  });

  it("testRandom4", () => {
    const count1 = randInt(700, 1400);
    const count2 = randInt(20, 40);
    const count3 = randInt(200, 400);
    const part1 = randomString(count1);
    const part2 = randomString(count2);
    const part3 = randomString(count3);
    const input = shuffle([
      count1.toString(),
      count2.toString(),
      count3.toString(),
      part1,
      part2,
      part3,
    ]).join("");
    expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
  });

  it("testRandom5", () => {
    const count1 = randInt(1000, 2000);
    const count2 = randInt(100, 200);
    const part1 = randomString(count1);
    const part2 = randomString(count2);
    const input = shuffle([
      count1.toString(),
      count2.toString(),
      part1,
      part2,
    ]).join("");
    expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
  });

  it("testRandom6", () => {
    const count1 = randInt(100, 200);
    const part1 = randomString(count1);
    const input = shuffle([count1.toString(), part1]).join("");
    expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
  });

  it("testRandom7", () => {
    for (let index = 0; index < 100; index++) {
      const count1 = randInt(10, 20);
      const count2 = randInt(10, 20);
      const count3 = randInt(10, 20);
      const part1 = randomString(count1);
      const part2 = randomString(count2);
      const part3 = randomString(count3);
      const input = shuffle([
        count1.toString(),
        count2.toString(),
        count3.toString(),
        part1,
        part2,
        part3,
      ]).join("");
      expect(isAValidMessage(input)).toBe(isAValidMessageProvider(input));
    }
  });
});
function randomString(length: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let response = "";
  for (let i = 0; i < length; i++) {
    response += chars[Math.floor(Math.random() * chars.length)];
  }
  return response;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isAValidMessageProvider(message: string): boolean {
  if (message === "") return true;
  if (!message.match(/^\d/)) return false;

  const items = message.split(/\d+/).filter((x) => x !== "");
  const counts = message.split(/\D+/).filter((x) => x !== "");

  if (items.length !== counts.length) return false;

  for (let i = 0; i < items.length; i++) {
    if (items[i].length !== parseInt(counts[i], 10)) {
      return false;
    }
  }

  return true;
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
