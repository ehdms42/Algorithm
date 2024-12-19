function solution(num_list) {
    let mul = num_list.reduce((acc, str) => acc * str); // 모든 원소의 곱
    let plus = num_list.reduce((acc, str) => acc + str) // 모든 원소의 합
        plus = Math.pow(plus, 2); // 모든 원소의 합의 제곱
    
    return mul < plus ? 1 : 0;
}