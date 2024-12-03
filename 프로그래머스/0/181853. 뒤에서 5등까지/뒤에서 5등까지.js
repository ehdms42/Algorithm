function solution(num_list) {
    var answer = [];
    arr = num_list.sort((a, b) => a - b);
    answer = arr.slice(0, 5)
    return answer;
}