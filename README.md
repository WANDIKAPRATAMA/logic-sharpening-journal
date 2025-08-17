# Logic Sharpening Journal

Tags: JavaScript, TypeScript, Node.js, CodeWars, Jest, Algorithms

---

## Description

This repository is a personal journey to sharpen programming logic by solving CodeWars kata one day at a time. Each solution lives under a day-based folder and comes with automated tests to verify correctness.

---

## Project Structure

```
.
├── exercises
│   └── journal-individual-learn
│       ├── day-1
│       │   ├── index.ts
│       │   └── index.test.ts
│       ├── day-2
│       │   ├── index.ts
│       │   └── index.test.ts
│       └── day-N
│           ├── index.ts
│           └── index.test.ts
├── scripts
│   └── dev.js
├── package.json
└── README.md
```

- exercises/journal-individual-learn/day-X  
  Contains the TypeScript solution (`index.ts`) and its Jest test (`index.test.ts`).

- scripts/dev.js  
  Wrapper to run a specific day with `npm run dev -- [day-number]`.

---

## Available Scripts

- `npm run build`  
  Compile all TypeScript files to JavaScript via `tsc`.

- `npm run dev --day=<n>` or `npm run dev -- <n>`  
  Launch `ts-node-dev` on `day-n/index.ts`. Replace `<n>` with the day number.

- `npm run test`  
  Run all Jest tests in watch mode.

---

## How to Run

1. Install dependencies

   ```bash
   npm install
   ```

2. Run a specific day’s solution

   ```bash
   npm run dev --day=3
   # or
   npm run dev -- 3
   ```

3. Execute all tests
   ```bash
   npm run test
   ```

---

## Journey Log

As I complete each day’s kata, I’ll add a new row here with details and a link to the challenge.

| Day | Kata Link                                                               | Kyu | Description                                                                                        |
| --- | ----------------------------------------------------------------------- | --- | -------------------------------------------------------------------------------------------------- |
| 1   | Initial Test                                                            | _–_ | Initialize Test                                                                                    |
| 2   | longestConsecutive\_                                                    | _–_ | _(challenge name and summary)_                                                                     |
| 3   | https://www.codewars.com/kata/5365bb5d5d0266cd010009be/train/javascript | 6   | Making Change                                                                                      |
| 4   | https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript | 5   | Write a program that will calculate the number of trailing zeros in a factorial of a given number. |
| 5   | https://www.codewars.com/kata/596d34df24a04ee1e3000a25/train/javascript | 4   | Count ones in a segment.                                                                           |
| 6   | https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/javascript       | 6   | Message Validator                                                                                  |
| 7   | https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript       | 6   | Message Validator                                                                                  |
| 8   | https://www.codewars.com/kata/5a077e8106d5b654b800004f/javascript       | 6   | Each n-th element of list                                                                          |

_(New days will be appended below as they are completed.)_

---

## Contributing

1. Create a new folder under `exercises/journal-individual-learn` named `day-<n>`.
2. Add your `index.ts` solution and `index.test.ts` for Jest.
3. Update the **Journey Log** table above with the kata link, kyu level, and a brief description.

Happy coding and learning! 🚀
