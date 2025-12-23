const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const brokenButtons = M === 0 ? [] : input[2].split(' ').map(Number);
const isBroken = Array(10).fill(false);

for (const btn of brokenButtons) {
    isBroken[btn] = true;
}

function check(channel) {
    if (channel === 0) {
        return isBroken[0] ? 0 : 1;
    }
    let len = 0;
    let temp = channel;
    while (temp > 0) {
        if (isBroken[temp % 10]) {
            return 0;
        }
        temp = Math.floor(temp / 10);
        len++;
    }
    return len;
}

let minPress = Math.abs(N - 100);

for (let i = 0; i <= 1000000; i++) {
    const len = check(i);
    if (len > 0) {
        const presses = len + Math.abs(i - N);
        minPress = Math.min(minPress, presses);
    }
}

console.log(minPress);