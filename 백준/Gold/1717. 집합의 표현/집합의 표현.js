const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let parent = Array.from({ length: n + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) return x;
  return find(parent[x]);
}

function union(a, b) {
  let rootA = find(a);
  let rootB = find(b);

  if (rootA !== rootB) {
    parent[rootB] = rootA;
  }
}

let answer = [];

for (let i = 1; i <= m; i++) {
  let [cmd, a, b] = input[i].split(" ").map(Number);

  if (cmd === 0) {
    union(a, b);
  } else {
    if (find(a) === find(b)) {
      answer.push("YES");
    } else {
      answer.push("NO");
    }
  }
}

console.log(answer.join("\n"));