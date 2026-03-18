const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [V, E] = input[0].split(' ').map(Number);
const edges = [];

for (let i = 1; i <= E; i++) {
  const [a, b, cost] = input[i].split(' ').map(Number);
  edges.push([a, b, cost]);
}

edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: V + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
}

// union
function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    parent[rootB] = rootA;
    return true;
  }
  return false;
}

let result = 0;

for (const [a, b, cost] of edges) {
  if (union(a, b)) {
    result += cost;
  }
}

console.log(result);