/* 

Examples
5 --->    [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]]

6  --->  [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]]

*/

function x(n: number): number[][] {
  return Array.from(
    {
      length: n,
    },
    (_, i) =>
      Array.from(
        {
          length: n,
        },
        (_, j) => {
          const x = n === j;
          return i === j || n - (i + 1) === j ? 1 : 0;
        }
      )
  );
}

if (require.main === module) {
  console.log(x(5));
}
