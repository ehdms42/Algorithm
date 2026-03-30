const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const MOD = 1000000007n;

function modInv(a) {
  return modPow(a, MOD - 2n);
}

function modPow(a, b) {
  let res = 1n;
  a %= MOD;
  while (b > 0n) {
    if (b & 1n) res = (res * a) % MOD;
    a = (a * a) % MOD;
    b >>= 1n;
  }
  return res;
}

// DSU
class DSU {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(a, b) {
    a = this.find(a);
    b = this.find(b);
    if (a !== b) this.parent[b] = a;
  }
}

const [V, E] = input[0].split(' ').map(Number);
let edges = [];

for (let i = 1; i <= E; i++) {
  let [u, v, w] = input[i].split(' ').map(Number);
  u--; v--;
  edges.push([w, u, v]);
}

edges.sort((a, b) => a[0] - b[0]);

let dsu = new DSU(V);
let ans = 1n;

let i = 0;

while (i < E) {
  let j = i;
  let w = edges[i][0];

  // 같은 weight 묶기
  let group = [];
  while (j < E && edges[j][0] === w) {
    group.push(edges[j]);
    j++;
  }

  // 현재 DSU 기준으로 압축된 그래프 만들기
  let compMap = new Map();
  let idx = 0;

  function getIdx(x) {
    if (!compMap.has(x)) {
      compMap.set(x, idx++);
    }
    return compMap.get(x);
  }

  let edgeList = [];

  for (let [_, u, v] of group) {
    let ru = dsu.find(u);
    let rv = dsu.find(v);
    if (ru !== rv) {
      edgeList.push([getIdx(ru), getIdx(rv)]);
    }
  }

  // 컴포넌트별로 나눠서 Kirchhoff 적용
  let adj = Array(idx).fill(0).map(() => []);

  for (let [u, v] of edgeList) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = Array(idx).fill(false);

  function countSpanningTree(nodes) {
    let n = nodes.length;
    if (n <= 1) return 1n;

    // Laplacian matrix
    let mat = Array(n).fill(0).map(() => Array(n).fill(0n));

    let index = new Map();
    nodes.forEach((v, i) => index.set(v, i));

    for (let v of nodes) {
      let i = index.get(v);
      for (let to of adj[v]) {
        if (index.has(to)) {
          let j = index.get(to);
          mat[i][i] += 1n;
          if (i !== j) mat[i][j] -= 1n;
        }
      }
    }

    // cofactor determinant (remove last row/col)
    let size = n - 1;
    let a = Array(size).fill(0).map(() => Array(size).fill(0n));

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        a[r][c] = (mat[r][c] % MOD + MOD) % MOD;
      }
    }

    // determinant (Gaussian elimination)
    let det = 1n;

    for (let i = 0; i < size; i++) {
      let pivot = i;
      while (pivot < size && a[pivot][i] === 0n) pivot++;
      if (pivot === size) return 0n;

      if (pivot !== i) {
        [a[pivot], a[i]] = [a[i], a[pivot]];
        det = (-det + MOD) % MOD;
      }

      det = (det * a[i][i]) % MOD;
      let inv = modInv(a[i][i]);

      for (let j = i + 1; j < size; j++) {
        let factor = (a[j][i] * inv) % MOD;
        for (let k = i; k < size; k++) {
          a[j][k] = (a[j][k] - factor * a[i][k]) % MOD;
          if (a[j][k] < 0) a[j][k] += MOD;
        }
      }
    }

    return det;
  }

  for (let v = 0; v < idx; v++) {
    if (!visited[v]) {
      let stack = [v];
      let nodes = [];
      visited[v] = true;

      while (stack.length) {
        let cur = stack.pop();
        nodes.push(cur);
        for (let nxt of adj[cur]) {
          if (!visited[nxt]) {
            visited[nxt] = true;
            stack.push(nxt);
          }
        }
      }

      let C = countSpanningTree(nodes);

      let contrib = (1n + ((C - 1n + MOD) % MOD) * modInv(BigInt(w)) % MOD) % MOD;
      ans = ans * contrib % MOD;
    }
  }

  // DSU 합치기
  for (let [_, u, v] of group) {
    dsu.union(u, v);
  }

  i = j;
}

console.log(ans.toString());