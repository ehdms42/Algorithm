function solution(n) {
    return n % 7 === 0 ? Math.trunc(n / 7) : Math.trunc(n / 7) + 1;
}