const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX_N = 1000000;
const isPrime = Array(MAX_N + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= MAX_N; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= MAX_N; j += i) {
            isPrime[j] = false;
        }
    }
}

let lineIndex = 0;
const results = [];

while (true) {
    const n = parseInt(input[lineIndex++]);
    if (n === 0) break;

    let found = false;
    for (let a = 3; a <= n / 2; a += 2) {
        if (isPrime[a]) {
            const b = n - a;
            if (isPrime[b]) {
                results.push(`${n} = ${a} + ${b}`);
                found = true;
                break;
            }
        }
    }

    if (!found) {
        results.push("Goldbach's conjecture is wrong.");
    }
}

console.log(results.join('\n'));