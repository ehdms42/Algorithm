function solution(array, height) {
    var answer = 0;
    let cnt = 0; 
    
    for(let i=0; i<=array.length-1; i++){
    if(array[i] > height) cnt++;
    }
    answer = cnt;
    return answer;
}