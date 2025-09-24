#!/usr/bin/env node
const { spawn } = require("child_process");

const arg = process.argv.slice(2)[0];
// terima "3" atau "--day=3" atau "day-3"
const day = (arg || "").replace(/^--?day=?/, "").replace(/^day-?/, "");

if (!day) {
  console.error("Usage: npm run test:day -- [day-number]");
  process.exit(1);
}

const testPath = `exercises/journal-individual-learn/day-${day}`;
console.log(`▶ Running tests for day-${day} (${testPath})`);

spawn("jest", [testPath, "--watchAll"], {
  stdio: "inherit",
  shell: true,
}).on("exit", (code) => process.exit(code));
