function solution(arr, queries) {
    for (let q of queries) {
        const [i, j] = q;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}