const fs = require("fs");

const line = fs.readFileSync(0, "utf8").trim();

const solution = (line) => {
  let answer = line;
  const regExp = /<[a-z\s]+>|[a-z0-9]+/g;

  answer = answer.replace(regExp, (word) => {
    return word.startsWith("<") ? word : word.split("").reverse().join("");
  });

  return answer;
};

console.log(solution(line));