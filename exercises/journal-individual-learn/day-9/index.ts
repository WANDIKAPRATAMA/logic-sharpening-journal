/* 

"P" = posisi awal Pac-Man.

"D" = titik/dot yang harus dimakan.

"W" = tembok (tidak bisa dilewati).

"E" = ruang kosong (bisa dilewati tapi tidak ada dot).

Position yaitu koordinat awal Pac-Man (baris, kolom) tempat "P" berada.
*/

const FILL = ["P", "D", "W", "E"];
type Mapp = string[][];
type Position = [number, number];

// function playPacMan(map: Mapp, position: Position): Result {
//   //coding here..
//   if (
//     map.every((items) =>
//       items.map((item) => !FILL.includes(item)).every((item) => item)
//     )
//   ) {
//     return "no solution";
//   }

//   if (
//     map.length !==
//     map.reduce((acc, curr) => acc + curr.length, 0) / map.length
//   ) {
//     return "no solution";
//   }

//   let result: Result = "no solution";
//   let movingPosition = [];
//   for (let i = 0; i < map.length; i++) {
//     for (let k = 0; k < map[i].length; k++) {
//       const currentRow = map[i][k];
//       if (currentRow === "D") {
//         movingPosition.push([i, k]);
//       }
//     }
//   }
//   for (let i = 0; i < movingPosition.length; i++) {
//     if (
//       movingPosition[i][0] === position[0] &&
//       movingPosition[i][1] === position[1]
//     ) {
//       result = "Passed";
//     }
//   }
//   console.log(movingPosition);
//   return result;
// }

function playPacMan(
  map: Mapp,
  position: Position
): (number[] | "no solution")[] {
  const rows = map.length;
  const cols = map[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const queue: Position[] = [position];
  const path: number[][] = [];
  const directions = [
    [1, 0], // bawah
    [-1, 0], // atas
    [0, 1], // kanan
    [0, -1], // kiri
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift() as Position;

    if (visited[r][c]) continue;
    visited[r][c] = true;

    if (map[r][c] === "D") {
      path.push([r, c]);
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited[nr][nc] &&
        map[nr][nc] !== "W"
      ) {
        queue.push([nr, nc]);
      }
    }
  }

  const totalDots = map.flat().filter((x) => x === "D").length;
  if (path.length === totalDots) {
    return path;
  }

  return ["no solution"];
}

const params: Mapp = [
  ["D", "D", "P"],
  ["D", "W", "E"],
  ["D", "D", "D"],
];

if (require.main === module) {
  console.log(playPacMan(params, [0, 2]));
}

export { playPacMan };
