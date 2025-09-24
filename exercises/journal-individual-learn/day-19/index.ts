function validationField(isbn: string): boolean {
  const mustEndWithX = (isbn: string): boolean =>
    isbn.includes("X") ? isbn.endsWith("X") : true;

  const mustBe10Digits = (isbn: string): boolean => isbn.length === 10;

  const mustOnlyNumbers = (isbn: string): boolean =>
    isbn
      .replace("X", "10")
      .split("")
      .every((char) => !isNaN(parseInt(char)));
  return mustEndWithX(isbn) && mustBe10Digits(isbn) && mustOnlyNumbers(isbn);
}
function calculateCheckDigit(isbn: string): number {
  const numbers = isbn.split("").map((char) => {
    if (char === "X") return 10;

    return parseInt(char);
  });
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] * (i + 1);
  }

  return result;
}

function validISBN10(isbn: string): boolean {
  const charValidation = validationField(isbn);

  if (!charValidation) return false;
  const summary = calculateCheckDigit(isbn);
  return summary % 11 === 0;
}

if (require.main === module) {
  const sampleTests = [
    ["1112223339", true],
    ["048665088X", true],
    ["1293000000", true],
    ["1234554321", true],
    ["1234512345", false],
    ["1293", false],
    ["X123456788", false],
    ["ABCDEFGHIJ", false],
    ["XXXXXXXXXX", false],
    ["048665088XZ", false],
  ];

  sampleTests.forEach((test) => {
    console.log(
      validISBN10(test[0] as string) === test[1] ? "Test Passed" : "Test Failed"
    );
  });
}

export { validISBN10 };
