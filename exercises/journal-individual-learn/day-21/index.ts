/* 
Buat program sederhana:
Ada daftar instruksi ["mov a 3", "inc a", "dec a"].
Jalankan instruksi satu per satu, dan kembalikan hasil akhir register.

👉 Target output: { a: 3 }

*/

const simple_assembler = (program: string[]): Record<string, number> => {
  let register: Record<string, number> = {};
  let i = 0;

  function getValue(x: string) {
    const parsed = parseInt(x);
    return isNaN(parsed) ? register[x] ?? 0 : parsed;
  }

  do {
    const splits = program[i].split(" ");
    const instr = splits[0];
    const variable = splits[1]; // variable
    const value = splits[2]; // value

    switch (instr) {
      case "mov":
        register[variable] = getValue(value);
      case "inc":
        register[variable] = register[variable] + 1;
      case "dec":
        register[variable] = register[variable] - 1;
      case "jnz":
        if (getValue(variable) !== 0) {
          i += getValue(value);
          continue;
        }
        break;
    }
    i++;
  } while (i < program.length);

  return register;
};

if (require.main === module) {
  console.log(simple_assembler(["mov a 3", "inc a", "dec a"])); // Should return{ a: 3}
}
