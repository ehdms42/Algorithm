function solution(number) {
    return (number.split('').reduce((acc, v) => acc += Number(v), 0)) % 9;
    
}