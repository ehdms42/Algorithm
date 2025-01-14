function solution(num_list, n) {
    const beforeN = num_list.slice(0, n); 
    const afterN = num_list.slice(n);

    return afterN.concat(beforeN);
}