// # Memisahkan string berdasarkan angka
// parts = re.split(r'\d+', text)
// print(parts)
// # Output: ['ini adalah contoh', 'string', 'dengan', 'angka']

// # Mengambil hanya angka
// numbers = re.findall(r'\d', text)# Mengambil hanya angka
function isAValidMessage(message: string): boolean {
  // your code
  if (message === "") return true;
  const m = message.split(/(\d+)/).slice(1);

  if (m.length % 2 !== 0) return false;

  let result = false;

  for (let i = 0; i < m.length - 1; i += 2) {
    if (!isNaN(parseInt(m[i])) && parseInt(m[i]) === m[i + 1].length) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

if (require.main === module) {
  console.log(isAValidMessage("4code13hellocodewars")); //should return true
  console.log(isAValidMessage("3hey5hello2hi5")); //should return false
}

export { isAValidMessage };
