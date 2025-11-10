const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let str = input[0].split(''); 
let M = Number(input[1]);
let commands = input.slice(2);

let left = str; 
let right = []; 

for (let cmd of commands) {
  if (cmd[0] === 'L') {
    if (left.length > 0) right.push(left.pop());
  } else if (cmd[0] === 'D') {
    if (right.length > 0) left.push(right.pop());
  } else if (cmd[0] === 'B') {
    if (left.length > 0) left.pop();
  } else if (cmd[0] === 'P') {
    let char = cmd.split(' ')[1];
    left.push(char);
  }
}

console.log(left.concat(right.reverse()).join(''));