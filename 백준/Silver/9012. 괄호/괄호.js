let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    let str = input[i];
    let count = 0;
    let isVPS = true;

    for (let char of str) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
            if (count < 0) {
                isVPS = false;
                break;
            }
        }
    }

    if (count !== 0) isVPS = false;

    console.log(isVPS ? "YES" : "NO");
}