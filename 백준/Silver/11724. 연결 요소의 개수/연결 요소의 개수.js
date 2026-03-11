const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

const visited = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u); 
}

function bfs(start) {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();

    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

let count = 0;


for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);      
    count++;     
  }
}

console.log(count);