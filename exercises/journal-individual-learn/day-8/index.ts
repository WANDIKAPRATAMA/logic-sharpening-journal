function each(n: number, xs: number[]): number[] {
  if (n === 0) return [];
  const sorteds = n > 0 ? xs : xs.reverse();
  if (Math.abs(n) === 1) return sorteds;

  //   TODO: This acctualy wrong solution cause misunderstood the question
  //   const lists = n < 0 ? xs.sort((a, b) => b - a) : xs;
  //   let result: number[] = [];
  //   let currentIndex = Math.abs(n);

  //   if (Math.abs(n) === 1) {
  //     result = lists;
  //   } else {
  //     for (let i = 0; i < lists.length; i++) {
  //       if (i === currentIndex) {
  //         result.push(lists[i]);
  //         currentIndex += Math.abs(n);
  //       }
  //     }
  //   }
  //   console.log("🚀 ~ each ~ sorteds:", sorteds);

  const result = sorteds.reduce<number[]>((acc, curr, index) => {
    // console.log("🚀 ~ each ~ curr:", curr);
    // console.log("🚀 ~ each ~ acc:", acc.length);
    // console.log(
    //   `🚀 ~ each ~ curr === Math.abs(${Math.abs(n)}) * ${Math.max(
    //     acc.length,
    //     1
    //   )}:`,
    //   curr === Math.abs(n) * Math.max(acc.length, 1)
    // );
    // if (index + 1 === Math.abs(n) * Math.max(acc.length, 1)) {
    if ((index + 1) % Math.abs(n) === 0) {
      return [...acc, curr];
    } else {
      return [...acc];
    }
  }, []);

  return result;
}

if (require.main === module) {
  console.log(each(-2, [1, 2, 3, 4, 5, 6])); //should return [5, 3, 1]
}

export { each };
