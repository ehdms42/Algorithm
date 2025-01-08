function solution(myString, pat) {
    let cnt = 0;
    let index = 0;
    
    // myString에서 pat을 찾는 동안 반복
    while ((index = myString.indexOf(pat, index)) !== -1) {
        cnt++; // pat이 발견되면 cnt 증가
        index++; // 다음 인덱스부터 다시 탐색
    }
    
    return cnt;
}
