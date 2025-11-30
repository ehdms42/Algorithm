const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map(v => v.split(''));

let rx, ry, bx, by, holeX, holeY;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (board[i][j] === 'R') { rx = i; ry = j; }
        if (board[i][j] === 'B') { bx = i; by = j; }
        if (board[i][j] === 'O') { holeX = i; holeY = j; }
    }
}

const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
const dy = [0, 0, -1, 1];

function move(x, y, dir) {
    let count = 0;
    while (board[x + dx[dir]][y + dy[dir]] !== '#' && board[x][y] !== 'O') {
        x += dx[dir];
        y += dy[dir];
        count++;
        if (board[x][y] === 'O') break;
    }
    return [x, y, count];
}

function bfs() {
    const visited = new Set();
    const queue = [];
    queue.push([rx, ry, bx, by, 0]);
    visited.add(`${rx},${ry},${bx},${by}`);

    while (queue.length) {
        let [crx, cry, cbx, cby, depth] = queue.shift();

        if (depth >= 10) return -1;

        for (let i = 0; i < 4; i++) {
            let [nrx, nry, rc] = move(crx, cry, i);
            let [nbx, nby, bc] = move(cbx, cby, i);

            if (board[nbx][nby] === 'O') continue;
            if (board[nrx][nry] === 'O') return depth + 1;

            if (nrx === nbx && nry === nby) {
                if (rc > bc) nrx -= dx[i], nry -= dy[i];
                else nbx -= dx[i], nby -= dy[i];
            }

            let key = `${nrx},${nry},${nbx},${nby}`;
            if (!visited.has(key)) {
                visited.add(key);
                queue.push([nrx, nry, nbx, nby, depth + 1]);
            }
        }
    }
    return -1;
}

console.log(bfs());