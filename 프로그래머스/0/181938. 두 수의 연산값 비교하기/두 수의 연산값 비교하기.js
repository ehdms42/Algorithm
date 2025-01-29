function solution(a, b) {
    const concat = parseInt(`${a}${b}`);
    const mul = 2 * a * b;
    
    if (concat >= mul) {
        return concat;
    } else {
        return mul;
    }
}
