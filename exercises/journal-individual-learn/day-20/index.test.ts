import { simple_assembler } from ".";

function my_simple_assembler(program: string[]): Record<string, number> {
  const registers: Record<string, number> = {};
  let line = 0;

  const getValue = (s: string): number =>
    s in registers ? registers[s] : parseInt(s, 10);

  const instructions: Record<string, (...args: string[]) => void> = {
    mov: (x, y) => (registers[x] = getValue(y)),
    inc: (x) => (registers[x] = (registers[x] ?? 0) + 1),
    dec: (x) => (registers[x] = (registers[x] ?? 0) - 1),
    jnz: (x, y) => {
      if (getValue(x) !== 0) line += getValue(y) - 1;
    },
  };

  while (line >= 0 && line < program.length) {
    const [cmd, x, y] = program[line].split(" ");
    instructions[cmd](x, y);
    line++;
  }

  return registers;
}

describe("🧪 Fixed tests", () => {
  it("Should work for example programs", () => {
    expect(
      simple_assembler([
        "mov a 5",
        "inc a",
        "dec a",
        "dec a",
        "jnz a -1",
        "inc a",
      ])
    ).toEqual({ a: 1 });

    expect(
      simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
    ).toEqual({ a: 0, b: -20 });

    expect(
      simple_assembler([
        "mov a 1",
        "mov b 1",
        "mov c 0",
        "mov d 26",
        "jnz c 2",
        "jnz 1 5",
        "mov c 7",
        "inc d",
        "dec c",
        "jnz c -2",
        "mov c a",
        "inc a",
        "dec b",
        "jnz b -2",
        "mov b c",
        "dec d",
        "jnz d -6",
        "mov c 18",
        "mov d 11",
        "inc a",
        "dec d",
        "jnz d -2",
        "dec c",
        "jnz c -5",
      ])
    ).toEqual({ a: 318009, b: 196418, c: 0, d: 0 });

    expect(
      simple_assembler([
        "mov d 100",
        "dec d",
        "mov b d",
        "jnz b -2",
        "inc d",
        "mov a d",
        "jnz 5 10",
        "mov c a",
      ])
    ).toEqual({ d: 1, b: 0, a: 1 });

    expect(
      simple_assembler([
        "mov c 12",
        "mov b 0",
        "mov a 200",
        "dec a",
        "inc b",
        "jnz a -2",
        "dec c",
        "mov a b",
        "jnz c -5",
        "jnz 0 1",
        "mov c a",
      ])
    ).toEqual({ c: 409600, b: 409600, a: 409600 });
  });
});

describe("🎲 Random tests", () => {
  const regs = "abcdefghijklmnopqrstuvwxyz".split("");

  function randomReg(exclude?: string): string {
    let r = "";
    do {
      r = regs[Math.floor(Math.random() * regs.length)];
    } while (r === exclude);
    return r;
  }

  for (let i = 0; i < 100; i++) {
    const prog: string[] = [];
    const ra = randomReg();
    const rb = randomReg(ra);
    const pattern =
      Math.random() < 0.5 ? ["inc", "inc", "dec"] : ["dec", "dec", "inc"];

    prog.push(`mov ${ra} ${Math.floor(Math.random() * 20 + 20)}`);
    prog.push(`mov ${rb} ${Math.floor(Math.random() * 3)}`);
    prog.push(`jnz ${rb} ${Math.floor(Math.random() * 4 + 2)}`);
    prog.push(`jnz ${ra} ${Math.floor(Math.random() * 4 + 2)}`);

    const steps = Math.floor(Math.random() * 10 + 6);
    for (let q = 0; q < steps; q++) {
      const op = pattern[Math.floor(Math.random() * pattern.length)];
      const reg = Math.random() < 0.5 ? ra : rb;
      prog.push(`${op} ${reg}`);
    }

    it(`Program: ${prog.join(", ")}`, () => {
      const expected = my_simple_assembler(prog);
      const actual = simple_assembler(prog);
      expect(actual).toEqual(expected);
    });
  }
});
