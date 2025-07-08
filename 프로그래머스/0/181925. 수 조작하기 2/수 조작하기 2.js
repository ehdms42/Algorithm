function solution(numLog) {
    let result = '';
    for(let i = 0; i < numLog.length; i++){
        let dif = numLog[i] - numLog[i - 1];

        if (dif == 1) result += 'w';
        else if (dif == -1) result += 's';
        else if (dif == 10) result += 'd';
        else if (dif == -10) result += 'a';
    }
    return result;
}