#!/usr/bin/env node
const { spawn } = require("child_process");

const arg = process.argv.slice(2)[0];
// terima "3" atau "--day=3" atau "day-3"
const day = (arg || "").replace(/^--?day=?/, "").replace(/^day-?/, "");

if (!day) {
  console.error("Usage: npm run dev -- [day-number]");
  process.exit(1);
}

const entry = `exercises/journal-individual-learn/day-${day}/index.ts`;
console.log(`▶ Starting dev for day-${day} (${entry})`);

spawn("ts-node-dev", ["--respawn", "--transpile-only", entry], {
  stdio: "inherit",
  shell: true,
}).on("exit", (code) => process.exit(code));
