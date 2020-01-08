let input = process.argv.splice(2);
let newInput = "";

for(let i = 0; i < input.length; i++){
  for(let j = input[i].length - 1; j >= 0; j--) {
    newInput += input[i][j];
  }
  if(i < input.length-1) {
    newInput += "\n"
  }
};

console.log(newInput);