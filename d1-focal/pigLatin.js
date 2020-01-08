let input = process.argv.splice(2);
let newWord = "";
for (let i = 0 ; i < input.length; i++) {
  for (let j = 1; j < input[i].length; j++) {
    newWord += input[i][j];
  }
  newWord += input[i][0];
  newWord += "ay";
  if (i < input.length) {
    newWord += " ";
  }
}

console.log(newWord);
