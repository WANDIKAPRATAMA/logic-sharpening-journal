export function sum(a: number, b: number): number {
  return a + b;
}

// contoh output di console
if (require.main === module) {
  console.log("sum(2, 3) =", sum(2, 3));
}
