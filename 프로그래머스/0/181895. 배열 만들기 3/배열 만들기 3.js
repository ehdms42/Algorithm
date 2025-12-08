function solution(arr, intervals) {
    let res = [];

    for (let [start, end] of intervals) {
        for (let i = start; i <= end; i++) {
            res.push(arr[i]);
        }
    }

    return res;
}