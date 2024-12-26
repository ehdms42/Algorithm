function solution(num_str) {
    return num_str.split('').reduce((acc, str) => acc += Number(str),0);
    
}