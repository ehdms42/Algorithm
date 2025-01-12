function solution(s1, s2) {
    let count = 0;

    // Set을 사용하여 중복을 제거하고 효율적으로 확인
    const set2 = new Set(s2);

    // s1의 각 원소가 set2에 있는지 확인
    for (let element of s1) {
        if (set2.has(element)) {
            count++;
        }
    }

    return count;
}
