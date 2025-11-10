const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

input.split('').forEach(ch => console.log(ch));