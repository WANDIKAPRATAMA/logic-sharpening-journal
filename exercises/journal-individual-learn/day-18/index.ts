/* 
Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/

function arrayDiff(a: number[], b: number[]) {
  return a.filter((item) => !b.includes(item));
}

if (require.main === module) {
  console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // should retirn [1,3]
}

export { arrayDiff };
