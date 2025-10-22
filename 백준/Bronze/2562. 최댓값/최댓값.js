let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let maxNum = Math.max(...input);        
let maxNumIndex = input.indexOf(maxNum); 

console.log(maxNum);
console.log(maxNumIndex + 1);