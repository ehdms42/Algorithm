const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]); 


const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a); 
}

const visited = Array(n + 1).fill(false);
let count = 0;

function dfs(node) {
  visited[node] = true;

  for (let next of graph[node]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}

dfs(1);

console.log(count);