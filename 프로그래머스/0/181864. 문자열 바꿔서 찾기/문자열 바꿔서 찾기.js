function solution(myString, pat) {
    return myString
        .replaceAll('A','x')  
        .replaceAll('B', 'A') 
        .replaceAll('x','B')  
        .includes(pat) ? 1 : 0;
}