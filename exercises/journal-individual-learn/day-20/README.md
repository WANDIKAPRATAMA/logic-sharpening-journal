Description

---

# 🛠️ Simple Assembler Interpreter

This project implements a simple interpreter for a subset of assembler-like instructions. It processes a list of textual instructions and simulates register operations.

## 📋 Supported Instructions

The interpreter supports the following commands:

- `mov x y`  
  Copies the value of `y` into register `x`.

  - `y` can be a constant integer or the name of another register.

- `inc x`  
  Increments the value of register `x` by 1.

- `dec x`  
  Decrements the value of register `x` by 1.

- `jnz x y`  
  Jumps `y` steps (forward if positive, backward if negative) **only if** the value of `x` is not zero.
  - `x` can be a constant or a register.
  - `y` can be a constant or a register.

> ℹ️ Register names are alphabetical (letters only). Constants are always integers (positive or negative).  
> The `jnz` instruction moves relative to itself. For example:
>
> - `jnz a -1` jumps to the previous instruction.
> - `jnz a 2` skips over the next instruction.

## 🧠 Execution Logic

The interpreter takes a list of instructions and executes them sequentially. Execution stops when there are no more instructions to process. The final state of all registers is returned as a dictionary.

> ✅ You can assume that every `inc`, `dec`, or `jnz` operation will be preceded by a `mov` instruction for that register. So, you don't need to handle uninitialized registers.

## 📦 Example Program

```ts
["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"];
```

### 🔍 Step-by-step Execution

```
mov a 5     → a = 5
inc a       → a = 6
dec a       → a = 5
dec a       → a = 4
jnz a -1    → jump back to previous instruction (dec a) while a ≠ 0
dec a       → a = 3
...

dec a → a = 0
jnz a -1 → a == 0 → no jump
inc a → a = 1

```

### ✅ Final Output

```ts
{
  a: 1;
}
```

## 📚 Reference

This kata is inspired by [Advent of Code 2016 - Day 12](https://adventofcode.com/2016/day/12).  
It is the first part of a series. The second part can be found [here](#).

---
