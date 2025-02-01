function solution(strArr) {
    const lengthCount = {};

    // 문자열 길이에 따라 개수를 세기
    strArr.forEach(str => {
        const length = str.length;
        lengthCount[length] = (lengthCount[length] || 0) + 1;
    });

    // 가장 큰 개수 찾기
    return Math.max(...Object.values(lengthCount));
}
