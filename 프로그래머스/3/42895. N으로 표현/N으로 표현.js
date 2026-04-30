function solution(N, number) {
    if (N === number) return 1;

    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        // 같은 숫자 이어붙이기 (예: 5, 55, 555)
        const repeated = Number(String(N).repeat(i));
        dp[i].add(repeated);

        // 이전 값들 조합
        for (let j = 1; j < i; j++) {
            for (let a of dp[j]) {
                for (let b of dp[i - j]) {
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(a * b);
                    dp[i].add(Math.floor(a / b)); // 나눗셈 (버림)
                }
            }
        }

        // 목표 숫자 찾으면 바로 리턴
        if (dp[i].has(number)) {
            return i;
        }
    }

    return -1;
}