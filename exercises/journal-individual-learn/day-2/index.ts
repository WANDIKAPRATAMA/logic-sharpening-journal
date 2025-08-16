/* 
Input: [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
Output: 7
Penjelasan:
Urutan berturut-turut [0, 1, 3, 4, 5, 6, 7, 8, 9] tidak penuh, tapi ada [3, 4, 5, 6, 7, 8, 9] panjangnya 7.
*/

export function longestConsecutive(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  const set = new Set(numbers);
  const sortedNumbers = [...set].sort((a, b) => a - b);

  let currentStreak = 1;
  let maxStreak = 1;

  for (let i = 1; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] === sortedNumbers[i - 1] + 1) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    maxStreak = Math.max(maxStreak, currentStreak);
  }

  return maxStreak;
}

// contoh output di console
if (require.main === module) {
  //   console.log(
  //     "Urutan berturut-turut [100, 4, 200, 1, 3, 2], panjangnya 4:",
  //     longestConsecutive([100, 4, 200, 1, 3, 2])
  //   );
  //   console.log(
  //     "Urutan berturut-turut [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], panjangnya 9:",
  //     longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
  //   );

  console.log(
    "Urutan berturut-turut [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6], panjangnya 7:",
    longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])
  );
}
