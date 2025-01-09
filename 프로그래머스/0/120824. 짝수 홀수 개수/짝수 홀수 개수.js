function solution(num_list) {
    let cnt1 = 0; // 짝수 개수
    let cnt2 = 0; // 홀수 개수

    num_list.forEach(i => {
        if (i % 2 === 0) {
            cnt1++;
        } else {
            cnt2++;
        }
    });

    return [cnt1, cnt2]; 
}
