let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let c = Number(input[0]);

for(let i = 1; i <= c; i++){
  let studentArr = input[i].split(' ').map(Number);
  let stuNum = studentArr[0];

  let scores = studentArr.slice(1);
  let sumScores = scores.reduce((acc, cur) => acc + cur);
  let avg = sumScores / stuNum;

  let overStudentCount = scores.filter(v => v > avg).length;
  let overStu = (overStudentCount / stuNum * 100).toFixed(3);

  console.log(overStu + '%');
}