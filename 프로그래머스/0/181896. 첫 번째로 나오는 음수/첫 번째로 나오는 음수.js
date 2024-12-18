function solution(num_list) {
    return num_list.findIndex(v => Math.sign(v) == -1);
}