function solution(names) {
    var answer = [];
    for(let i = 0; i<names.length; i+=5){
    let temp = names.slice(i, i+5)
        answer.push(temp[0])
    }
    return answer;
}