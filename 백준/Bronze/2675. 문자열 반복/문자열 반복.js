let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let t = Number(input[0]);

for(let i = 1; i <= t; i++){
  let [r, s] = input[i].split(' ');
  r = Number(r);

  let answer = s.split('').map(v => v.repeat(r)).join('');
  console.log(answer);
}