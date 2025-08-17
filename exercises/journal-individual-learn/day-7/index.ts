const PANGARAM_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function isPangram(str: string) {
  return PANGARAM_LETTERS.every((letter) => str.toLowerCase().includes(letter));
}

if (require.main === module) {
  console.log(isPangram("The quick brown fox jumps over the lazy dog."));
}

export { isPangram };
