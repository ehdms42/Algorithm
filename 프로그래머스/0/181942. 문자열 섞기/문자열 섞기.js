function solution(str1, str2) {
    let answer = '';
    for (let i = 0; i < str1.length; i++) {
        answer += str1[i] + str2[i]; // str1과 str2의 각 문자를 번갈아 추가
    }

    return answer; 
}
