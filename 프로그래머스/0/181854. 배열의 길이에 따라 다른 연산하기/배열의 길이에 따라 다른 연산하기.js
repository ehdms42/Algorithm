function solution(arr, n) {
    const isOdd = arr.length % 2 !== 0;  

    return arr.map((v, i) => {
        if (isOdd && i % 2 === 0) return v + n;  
        if (!isOdd && i % 2 === 1) return v + n;
        return v;                                
    });
}