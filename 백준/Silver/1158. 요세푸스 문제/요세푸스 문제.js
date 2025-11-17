const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

void answer(input);

function answer(input) {
    const n = input[0]; // 사람 수
    var k = input[1];   // 순번

    // Queue 구현
    class Queue {
        constructor() {
            this.items = [];
        }
        enqueue(item) {
            this.items.push(item);
        }
        dequeue() {
            return this.items.shift();
        }
    }

    const queue = new Queue();

    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }

    const arr = [];

    for (let i = 0; i < n; i++) { 
        k = k % n;
        if (k === 0) k = n;

        for (let j = 0; j < k; j++) {
            const temp = queue.dequeue();
            if (j !== k - 1) {
                queue.enqueue(temp);
            } else {
                arr.push(temp);
            }
        }
    }

    console.log(`<${arr.join(", ")}>`);
}