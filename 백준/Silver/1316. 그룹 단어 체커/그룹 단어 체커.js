let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]); 
let summary = 0; 

for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) summary += 1;
}

console.log(summary);

// 그룹 단어인지 검사하는 함수
function check(word) {
  let seen = new Set(); 
  let prev = ''; 

  for (let ch of word) {
    if (ch !== prev) {
      if (seen.has(ch)) return false; 
      seen.add(prev);
    }
    prev = ch; 
  }

  return true; 
}