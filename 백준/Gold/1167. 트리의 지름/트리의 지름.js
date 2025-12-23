const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const V = parseInt(input[0]);

const adjList = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i <= V; i++) {
    const line = input[i].split(' ').map(Number);
    const startNode = line[0];
    let j = 1;
    while (line[j] !== -1) {
        const endNode = line[j];
        const distance = line[j + 1];
        adjList[startNode].push({ to: endNode, dist: distance });
        j += 2;
    }
}

function bfs(startNode) {
    const distances = Array(V + 1).fill(-1);
    const queue = [];

    queue.push([startNode, 0]);
    distances[startNode] = 0;

    let farthestNode = startNode;
    let maxDistance = 0;

    let head = 0;
    while (head < queue.length) {
        const [currentNode, currentDist] = queue[head++];

        if (currentDist > maxDistance) {
            maxDistance = currentDist;
            farthestNode = currentNode;
        }

        for (const edge of adjList[currentNode]) {
            const nextNode = edge.to;
            const weight = edge.dist;

            if (distances[nextNode] === -1) {
                distances[nextNode] = currentDist + weight;
                queue.push([nextNode, currentDist + weight]);
            }
        }
    }

    return { farthestNode, maxDistance };
}

const { farthestNode: nodeA } = bfs(1);

const { maxDistance: diameter } = bfs(nodeA);

console.log(diameter);