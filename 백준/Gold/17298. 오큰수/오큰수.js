const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const result = new Array(N).fill(-1);
const stack = []; 

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && A[stack[stack.length - 1]] < A[i]) {
    const idx = stack.pop();
    result[idx] = A[i];
  }
  stack.push(i);
}

console.log(result.join(' '));