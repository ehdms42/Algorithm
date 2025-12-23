const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const M = parseInt(input[0]);
const N = parseInt(input[1]);

const isPrime = Array(N + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let p = 2; p * p <= N; p++) {
    if (isPrime[p]) {
        for (let j = p * p; j <= N; j += p) {
            isPrime[j] = false;
        }
    }
}

const result = [];
for (let i = M; i <= N; i++) {
    if (isPrime[i]) {
        result.push(i);
    }
}

console.log(result.join('\n'));