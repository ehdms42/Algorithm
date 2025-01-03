function solution(my_string, indices) {
    let str = my_string.split('');
    let tmp = indices.forEach(v => str[v] = '');
    return str.join('');
}
