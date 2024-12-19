function solution(myString, pat) {
    let temp = myString.replaceAll("A", "tmp");
        temp = temp.replaceAll("B", "A");
        temp = temp.replaceAll("tmp", "B");
    
    return temp.includes(pat) ? 1 : 0;
}
