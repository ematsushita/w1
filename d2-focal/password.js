/*

*/

const arguments = process.argv.slice(2);

const obfuscate = function(arg){
  let string = arg.toString();
  let newString = "";
  for (let i = 0; i < string.length; i++){
    switch(string[i]) {
      case "a":
        newString += "4";
        break;
      case "e":
        newString += "3";
        break;
      case "o":
        newString += "0";
        break;
      case "l":
        newString += "1";
        break;
      default:
        newString += string[i];
        break;
    }
  }
  return newString;
}

console.log(obfuscate(arguments));