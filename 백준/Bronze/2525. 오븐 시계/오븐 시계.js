let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(/\s+/);

let hour = Number(input[0]);
let min = Number(input[1]);
let need_time = Number(input[2]);

min += need_time;

if (min >= 60) {
  hour += Math.floor(min / 60);
  min = min % 60;
}

if (hour >= 24) hour = hour % 24;

console.log(hour, min);