function solution(a, b) {
    
    const ab = parseInt(String(a) + String(b));
    const ba = parseInt(String(b) + String(a)); 
    
    return ab >= ba ? ab : ba; 
}
