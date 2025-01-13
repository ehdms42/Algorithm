function solution(rsp) {
    return rsp.replace(/2/g, 'x').replace(/0/g, 'y').replace(/5/g, '2').replace(/x/g, '0').replace(/y/g, '5');
}