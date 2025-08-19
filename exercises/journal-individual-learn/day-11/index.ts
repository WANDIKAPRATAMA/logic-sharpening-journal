function matrixfy(str: string) {
  if (str.length === 0) {
    return "name must be at least one letter";
  }

  const size = Math.ceil(Math.sqrt(str.length));
  const result = Array.from({ length: size }, () => Array(size).fill("."));

  for (let i = 0; i < str.length; i++) {
    const row = Math.floor(i / size);
    const col = i % size;
    result[row][col] = str[i];
  }

  return result;
}

// Test cases
if (require.main === module) {
  console.log(matrixfy("Bill")); // Expected: [ ["B", "i"], ["l", "l"] ]
  console.log(matrixfy("Frank")); // Expected: [ ["F", "r", "a"], ["n", "k", "."], [".", ".", "."] ]
  console.log(matrixfy("")); // Expected: "name must be at least one letter"
}

export { matrixfy };
