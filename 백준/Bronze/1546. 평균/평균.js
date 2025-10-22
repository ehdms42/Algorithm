let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let score = input[1].split(' ').map(Number);
let maxScore = Math.max(...score);

let fixScore = score.map(v => v/maxScore * 100);
let newScoreAvg = fixScore.reduce((acc, cur) => acc + cur) / n;

console.log(newScoreAvg);