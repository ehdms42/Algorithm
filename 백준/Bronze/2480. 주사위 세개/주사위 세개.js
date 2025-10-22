let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);

if (first === second && second === third) console.log(10000 + first * 1000);
else if(first === second) console.log(1000 + first * 100);
else if(second === third) console.log(1000 + second * 100);
else if(first === third) console.log(1000 + third * 100);

else console.log(Math.max(first,second,third)*100);