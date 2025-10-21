let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [hour, min] = input[0].split(' ').map(Number);
let need_time = Number(input[1]);

hour += Math.floor((min + need_time) / 60);
min = (min + need_time) % 60;

if (hour >= 24) hour -= 24;

console.log(hour, min);