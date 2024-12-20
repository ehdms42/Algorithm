function solution(num_list) {
    const isOdd = parseInt(num_list.filter(v => v % 2 == 0).join(''))
    const isEven = parseInt(num_list.filter(v => v % 2 !== 0).join(''))
    
    return isOdd + isEven;
}