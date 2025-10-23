let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let reverseNum1 = Number(input[0].split('').reverse().join(''));
let reverseNum2 = Number(input[1].split('').reverse().join(''));

let arr = [reverseNum1, reverseNum2];
console.log(Math.max(...arr));