let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
for (let i = 1; i <= T; i++) {
    let [A, B] = input[i].split(',').map(Number);
    console.log(A + B);
}