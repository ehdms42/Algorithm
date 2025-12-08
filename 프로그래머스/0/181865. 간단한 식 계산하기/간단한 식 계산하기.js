function solution(binomial) {
    let [aStr, op, bStr] = binomial.split(' ');
    
    let a = parseInt(aStr);
    let b = parseInt(bStr);
    
    switch (op){
        case '+' : return a + b;
        case '-' : return a - b;
        case '*' : return a * b;
    }
}