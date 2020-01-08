// Write a program that takes a single parameter from the command line, 
//a number, and rolls that many six-sided dice

const arguments = process.argv.splice(2);
let max = 6;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const diceRoller = function (arg) {
  let num = parseInt(arg);
  let output = "";
  for (let i = 0; i < num; i++) {
    value = getRandomInt(max);
    output += value;
    if (i < num - 1) {
      output += ", ";
    }
  }
  return `Rolled ${num} dice: ${output}`;
};

console.log(diceRoller(arguments));