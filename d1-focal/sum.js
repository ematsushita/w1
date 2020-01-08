let values = process.argv.slice(2);
let sum = 0;


for (let i = 0; i < values.length; i++) {
  sum += Number(values[i]);
}
console.log(sum);