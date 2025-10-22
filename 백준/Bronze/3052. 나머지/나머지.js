let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(new Set(input.map(v => v % 42)).size);