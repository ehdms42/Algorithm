function solution(str1, str2) {
    let res = [];
    let splitArr1 = str1.split('');
    let splitArr2 = str2.split('');
    
    for(let i = 0; i <= str1.length; i++){
        res.push(splitArr1[i]);
        res.push(splitArr2[i]);
    }
    
    return res.join('');
}