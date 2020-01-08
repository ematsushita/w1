const loopyLighthouse = function(range, multiple, words){
  let displayLoop = "" ;
  for (let i = range[0]; i < range[1]; i++) {
    displayLoop += (i % multiple[0] === 0 ? i % multiple[1] ? (words[0] + words[1]) : words[0] : (i % multiple[1] === 0 ? words[1] : x)) + "\n";
  }
  return displayLoop;
}