function solution(dots) {
    // 기울기 구하는 함수
    const slope = (a, b) => (a[1] - b[1]) / (a[0] - b[0]);

    // 세 가지 경우의 조합
    if (slope(dots[0], dots[1]) === slope(dots[2], dots[3])) return 1;
    if (slope(dots[0], dots[2]) === slope(dots[1], dots[3])) return 1;
    if (slope(dots[0], dots[3]) === slope(dots[1], dots[2])) return 1;

    return 0;
}