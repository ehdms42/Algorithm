function solution(numbers) {
    const set = new Set();
    const visited = Array(numbers.length).fill(false);

    function dfs(current) {
        if (current.length > 0) {
            set.add(Number(current));
        }

        for (let i = 0; i < numbers.length; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            dfs(current + numbers[i]);
            visited[i] = false;
        }
    }

    dfs("");

    let count = 0;

    for (let num of set) {
        if (isPrime(num)) count++;
    }

    return count;
}

// 소수 판별 함수
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}