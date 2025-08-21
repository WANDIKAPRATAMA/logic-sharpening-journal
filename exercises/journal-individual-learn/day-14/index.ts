/* 
"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
*/

function sortTheInnerContent(words: string): string {
  const wordsArray = words.split(" ");
  console.log("🚀 ~ sortTheInnerContent ~ wordsArray:", wordsArray);

  let result = [];

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= 2) {
      const sorted = wordsArray[i]
        .slice(1, wordsArray[i].length - 1)
        .split("")
        .sort((a, b) => b.localeCompare(a))
        .join("");
      result.push(
        "" + wordsArray[i][0] + sorted + wordsArray[i][wordsArray[i].length - 1]
      );
    } else {
      result.push(wordsArray[i]);
    }
  }

  return result.join(" ");
}

if (require.main === module) {
  console.log(sortTheInnerContent("wait for me")); //-->  "wiat for me"
  console.log(sortTheInnerContent("this kata is easy")); //-->  "tihs ktaa is esay"
}

export { sortTheInnerContent };
