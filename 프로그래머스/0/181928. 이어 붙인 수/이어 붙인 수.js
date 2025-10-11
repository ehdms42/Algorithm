function solution(num_list) {
    let oddNum = Number(num_list.filter(v => v % 2 !== 0).join(''));
    let evenNum = Number(num_list.filter(v => v % 2 === 0).join(''));
    
    return oddNum + evenNum;
}