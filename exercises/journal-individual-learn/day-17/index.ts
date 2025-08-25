/* 

Example
 input: "elephant-rides are really fun!"
          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
 words (^):   "elephant" "rides" "are" "really" "fun"
                123456     123     1     1234     1
 ignore short words:               X              X

 abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
 all non-word characters (*) remain in place
                     "-"      " "    " "     " "     "!"
output: "e6t-r3s are r4y fun!"

*/
function abbreviate(str: string) {
  // !Dirty Code
  // return str
  //   .split(" ")
  //   .map((word) => {
  //     const wds = word.replaceAll("!", "");
  //     if (wds === ":;=;:") return word;
  //     if (wds.includes("-")) {
  //       return wds
  //         .split("-")
  //         .map((w) =>
  //           w.replaceAll("!", "").length >= 4
  //             ? w.replaceAll("!", "").charAt(0) +
  //               (w.replaceAll("!", "").length - 2) +
  //               w.replaceAll("!", "").charAt(w.replaceAll("!", "").length - 1) +
  //               w.replaceAll(/[A-Za-z]/g, "")
  //             : w
  //         )
  //         .join("-");
  //     }
  //     return wds.replaceAll("!", "").length >= 4
  //       ? wds.charAt(0) +
  //           (wds.length - 2) +
  //           wds.replaceAll("!", "").charAt(wds.length - 1) +
  //           wds.replaceAll(/[A-Za-z]/g, "")
  //       : word;
  //   })
  //   .join(" ");

  // TODO: Replaced their code with regex implmentation
  return str.replace(/[a-zA-Z]{4,}/g, (word) => {
    return word[0] + (word.length - 2) + word[word.length - 1];
  });
}

if (require.main === module) {
  console.log(abbreviate("elephant-rides are really fun!"));
}

export { abbreviate };
