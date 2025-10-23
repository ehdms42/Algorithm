let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

if (input === "") {
    console.log(0);
} else {
    let words = input.split(' ');
    console.log(words.length);
}