function simple_assembler(program: string[]): Record<string, number> {
  const registers: Record<string, number> = {};
  let i = 0;

  function getValue(x: string): number {
    const parsed = parseInt(x);
    return isNaN(parsed) ? registers[x] ?? 0 : parsed;
  }

  while (i < program.length) {
    const parts = program[i].split(" ");
    const instr = parts[0];
    const x = parts[1]; // variable
    const y = parts[2]; // value

    switch (instr) {
      case "mov":
        registers[x] = getValue(y);
        break;
      case "inc":
        registers[x] = (registers[x] ?? 0) + 1;
        break;
      case "dec":
        registers[x] = (registers[x] ?? 0) - 1;
        break;
      case "jnz":
        console.log("Get Value: ", getValue(x));
        if (getValue(x) !== 0) {
          console.log("Before", i);
          i += getValue(y);
          console.log("After i: ", i);
          continue;
        }
        break;
    }

    i++;
    console.log("I ++", i);
  }

  return registers;
}

if (require.main === module) {
  console.log(
    simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"]) //should return {'a': 0, 'b': -20}
  );
}

export { simple_assembler };
