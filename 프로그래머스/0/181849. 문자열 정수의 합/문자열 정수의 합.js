function solution(num_str) {
    return num_str.split('').map(v=> Math.floor(v)).reduce((acc, str) => acc += str);
    
}