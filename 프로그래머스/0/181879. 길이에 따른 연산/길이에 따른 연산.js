function solution(num_list) {
    let numSum = num_list.reduce((acc, cur) => acc + cur);
    let numMul = num_list.reduce((acc, cur) => acc * cur);
    
    return num_list.length >= 11 ? numSum : numMul;
}