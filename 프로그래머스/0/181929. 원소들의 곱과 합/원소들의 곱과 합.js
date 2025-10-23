function solution(num_list) {
    let sum = num_list.reduce((acc, cur) => acc + cur);
    let mul = num_list.reduce((acc, cur) => acc * cur);
    
    return mul < Math.pow(sum,2) ? 1 : 0;
}