function solution(n) {
    const answer = [];
    for(let i = 0; i < n; i++){
        const res = [];
        for(let j = 0; j < n; j++){
            res.push(i === j ? 1 : 0);
        }
        answer.push(res);
    }
    return answer;
}